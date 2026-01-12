import { NextResponse, type NextRequest } from "next/server";
import crypto from "crypto";
import { getPool } from "../../../lib/server/db";

export const runtime = "nodejs";

const allowedKinds = new Set(["demo_request", "sales_inquiry", "contact_message"]);

function asString(value: unknown) {
  return typeof value === "string" ? value : undefined;
}

function normalizeEmail(value: unknown) {
  const email = asString(value)?.trim().toLowerCase();
  if (!email) return undefined;
  if (!/^\S+@\S+\.\S+$/.test(email)) return undefined;
  return email;
}

function clamp(value: string | undefined, max: number) {
  if (!value) return undefined;
  const v = value.trim();
  if (!v) return undefined;
  return v.length > max ? v.slice(0, max) : v;
}

function getClientIp(request: NextRequest) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0]?.trim();
  const realIp = request.headers.get("x-real-ip");
  if (realIp) return realIp.trim();
  return undefined;
}

function hashIp(ip: string | undefined) {
  const salt = process.env.LEADS_IP_SALT;
  if (!ip || !salt) return undefined;
  return crypto.createHash("sha256").update(`${salt}:${ip}`).digest("hex");
}

export async function POST(request: NextRequest) {
  let body: any;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON body." }, { status: 400 });
  }

  const kind = asString(body.kind) ?? "demo_request";
  if (!allowedKinds.has(kind)) {
    return NextResponse.json({ ok: false, error: "Invalid kind." }, { status: 400 });
  }

  // Accept both camelCase and snake_case input.
  const firstName = clamp(asString(body.firstName ?? body.first_name), 120);
  const lastName = clamp(asString(body.lastName ?? body.last_name), 120);
  const email = normalizeEmail(body.email);
  const phone = clamp(asString(body.phone), 50);
  const company = clamp(asString(body.company), 200);
  const industry = clamp(asString(body.industry), 120);
  const message = clamp(asString(body.message ?? body.additionalInfo), 4000);
  const preferredDateRaw = asString(body.preferredDate ?? body.preferred_date);
  const preferredTime = clamp(asString(body.preferredTime ?? body.preferred_time), 80);
  const sourcePath = clamp(asString(body.sourcePath ?? body.source_path), 300);
  const utmSource = clamp(asString(body.utmSource ?? body.utm_source), 200);
  const utmMedium = clamp(asString(body.utmMedium ?? body.utm_medium), 200);
  const utmCampaign = clamp(asString(body.utmCampaign ?? body.utm_campaign), 200);

  if (!firstName || !lastName || !email) {
    return NextResponse.json(
      { ok: false, error: "First name, last name, and email are required." },
      { status: 400 }
    );
  }

  let preferredDate: string | null = null;
  if (preferredDateRaw) {
    const parsed = new Date(preferredDateRaw);
    if (!Number.isNaN(parsed.getTime())) {
      preferredDate = parsed.toISOString().slice(0, 10);
    }
  }

  const referrer = clamp(request.headers.get("referer") ?? undefined, 500);
  const userAgent = clamp(request.headers.get("user-agent") ?? undefined, 500);
  const ipHash = hashIp(getClientIp(request));

  const payload = {
    designation: clamp(asString(body.designation), 120),
    country: clamp(asString(body.country), 120),
    productInterest: clamp(asString(body.productInterest ?? body.product_interest), 120),
  };

  try {
    const pool = getPool();
    const result = await pool.query(
      `
      insert into lead_submissions (
        kind,
        status,
        first_name,
        last_name,
        email,
        phone,
        company,
        industry,
        message,
        preferred_date,
        preferred_time,
        source_path,
        referrer,
        utm_source,
        utm_medium,
        utm_campaign,
        user_agent,
        ip_hash,
        payload
      )
      values (
        $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19
      )
      returning id
      `,
      [
        kind,
        "new",
        firstName,
        lastName,
        email,
        phone ?? null,
        company ?? null,
        industry ?? null,
        message ?? null,
        preferredDate,
        preferredTime ?? null,
        sourcePath ?? null,
        referrer ?? null,
        utmSource ?? null,
        utmMedium ?? null,
        utmCampaign ?? null,
        userAgent ?? null,
        ipHash ?? null,
        payload,
      ]
    );

    const id = result.rows?.[0]?.id;
    return NextResponse.json({ ok: true, id }, { status: 201 });
  } catch (error: any) {
    const message = typeof error?.message === "string" ? error.message : "";
    const relationMissing =
      typeof message === "string" &&
      (message.includes('relation "lead_submissions" does not exist') ||
        message.includes("relation \"lead_submissions\" does not exist"));

    if (relationMissing) {
      return NextResponse.json(
        {
          ok: false,
          error:
            'Database table missing. Create it using `db/lead_submissions.sql`, then try again.',
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { ok: false, error: "Failed to save your request. Please try again." },
      { status: 500 }
    );
  }
}

