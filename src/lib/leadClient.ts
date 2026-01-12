export type LeadKind = "demo_request" | "sales_inquiry" | "contact_message";

export type LeadSubmitInput = {
  kind: LeadKind;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company?: string;
  industry?: string;
  message?: string;
  preferredDate?: string;
  preferredTime?: string;
  designation?: string;
  country?: string;
  productInterest?: string;
};

type LeadSubmitResponse =
  | { ok: true; id: number }
  | { ok: false; error: string };

function getUtmParams() {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  return {
    utmSource: params.get("utm_source") ?? undefined,
    utmMedium: params.get("utm_medium") ?? undefined,
    utmCampaign: params.get("utm_campaign") ?? undefined,
  };
}

export async function submitLead(
  input: LeadSubmitInput
): Promise<{ id: number }> {
  const body = {
    ...input,
    ...(typeof window !== "undefined" ? { sourcePath: window.location.pathname } : {}),
    ...getUtmParams(),
  };

  const response = await fetch("/api/leads", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const data = (await response.json().catch(() => null)) as LeadSubmitResponse | null;

  if (!response.ok) {
    const message =
      data && typeof data === "object" && "error" in data && typeof data.error === "string"
        ? data.error
        : "Failed to submit. Please try again.";
    throw new Error(message);
  }

  if (!data || typeof data !== "object" || !("ok" in data) || data.ok !== true) {
    throw new Error("Failed to submit. Please try again.");
  }

  return { id: data.id };
}

