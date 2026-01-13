/* eslint-disable no-console */

const { Client } = require("pg");
const fs = require("fs");
const path = require("path");

function loadEnvFileIfPresent(filename) {
  const fullPath = path.join(process.cwd(), filename);
  if (!fs.existsSync(fullPath)) return;

  const content = fs.readFileSync(fullPath, "utf8");
  for (const rawLine of content.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#")) continue;

    const idx = line.indexOf("=");
    if (idx <= 0) continue;

    const key = line.slice(0, idx).trim();
    let value = line.slice(idx + 1).trim();
    if (!key) continue;

    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    if (process.env[key] === undefined) {
      process.env[key] = value;
    }
  }
}

function getBoolEnv(name) {
  const value = process.env[name];
  if (!value) return false;
  return value === "1" || value.toLowerCase() === "true";
}

function getUrlParam(connectionString, name) {
  const idx = connectionString.indexOf("?");
  if (idx < 0) return undefined;
  try {
    const params = new URLSearchParams(connectionString.slice(idx + 1));
    const value = params.get(name);
    return value === null ? undefined : value;
  } catch {
    return undefined;
  }
}

function getUrlBoolParam(connectionString, name) {
  const value = getUrlParam(connectionString, name);
  if (value === undefined) return undefined;
  return value === "1" || value.toLowerCase() === "true";
}

function stripSslParamsFromConnectionString(connectionString) {
  const queryIndex = connectionString.indexOf("?");
  if (queryIndex < 0) return connectionString;

  const base = connectionString.slice(0, queryIndex);
  const hashIndex = connectionString.indexOf("#", queryIndex);
  const query =
    hashIndex >= 0
      ? connectionString.slice(queryIndex + 1, hashIndex)
      : connectionString.slice(queryIndex + 1);
  const hash = hashIndex >= 0 ? connectionString.slice(hashIndex) : "";

  try {
    const params = new URLSearchParams(query);
    for (const key of ["ssl", "sslmode", "sslrootcert", "sslcert", "sslkey", "sslpassword"]) {
      params.delete(key);
    }
    const nextQuery = params.toString();
    return nextQuery ? `${base}?${nextQuery}${hash}` : `${base}${hash}`;
  } catch {
    return connectionString;
  }
}

function safeDbInfo(databaseUrl) {
  try {
    const url = new URL(databaseUrl);
    return {
      host: url.hostname,
      port: url.port || "(default)",
      database: url.pathname.replace(/^\//, ""),
      user: url.username || "(unknown)",
    };
  } catch {
    return null;
  }
}

async function main() {
  loadEnvFileIfPresent(".env.local");
  loadEnvFileIfPresent(".env");

  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    console.error("Missing DATABASE_URL in environment.");
    process.exit(1);
  }

  const info = safeDbInfo(databaseUrl);
  if (info) {
    console.log(
      `Connecting to Postgres host=${info.host} port=${info.port} db=${info.database} user=${info.user}`
    );
  }

  const sslEnabled =
    getBoolEnv("DATABASE_SSL") ||
    getUrlBoolParam(databaseUrl, "ssl") === true ||
    ["require", "verify-ca", "verify-full"].includes(getUrlParam(databaseUrl, "sslmode")) ||
    ["require", "verify-ca", "verify-full"].includes(
      (process.env.PGSSLMODE || "").toLowerCase()
    );

  // NOTE: `pg` parses `connectionString` and can override `ssl` based on `sslmode`/`ssl` query params.
  // Strip SSL params so our explicit `ssl` options take precedence.
  const effectiveDatabaseUrl = sslEnabled
    ? stripSslParamsFromConnectionString(databaseUrl)
    : databaseUrl;

  const client = new Client({
    connectionString: effectiveDatabaseUrl,
    ssl: sslEnabled ? { rejectUnauthorized: false } : undefined,
  });

  await client.connect();

  try {
    const tableCheck = await client.query(
      "select to_regclass('public.lead_submissions') as table_name"
    );
    const tableName = tableCheck.rows?.[0]?.table_name;
    if (!tableName) {
      console.error(
        "Table public.lead_submissions not found. Run db/lead_submissions.sql on your database first."
      );
      process.exit(1);
    }

    const stamp = Date.now();
    const testEmail = `test+${stamp}@example.com`;

    const inserted = await client.query(
      `
      insert into public.lead_submissions (kind, first_name, last_name, email, message, source_path, payload)
      values ($1,$2,$3,$4,$5,$6,$7::jsonb)
      returning id
      `,
      [
        "demo_request",
        "Test",
        "Lead",
        testEmail,
        "DB connectivity test from scripts/test-leads-db.js",
        "/test-script",
        JSON.stringify({ testRunAt: new Date(stamp).toISOString() }),
      ]
    );

    const id = inserted.rows?.[0]?.id;
    if (!id) {
      console.error("Insert failed (no id returned).");
      process.exit(1);
    }

    const fetched = await client.query(
      "select id, kind, email, status, created_at from lead_submissions where id = $1",
      [id]
    );

    console.log("Inserted row:", fetched.rows?.[0]);

    const cleanup = process.argv.includes("--cleanup");
    if (cleanup) {
      await client.query("delete from lead_submissions where id = $1", [id]);
      console.log("Cleanup: deleted inserted test row.");
    } else {
      console.log(
        "No cleanup performed. Re-run with `--cleanup` to delete the inserted test row."
      );
    }
  } finally {
    await client.end();
  }
}

main().catch(err => {
  console.error("DB test failed:", err?.message || err);
  process.exit(1);
});
