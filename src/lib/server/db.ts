import "server-only";
import { Pool } from "pg";

function normalizeEnv(value: string | undefined) {
  return typeof value === "string" ? value.trim() : "";
}

function getConnectionStringQueryParams(connectionString: string) {
  const queryIndex = connectionString.indexOf("?");
  if (queryIndex < 0) return undefined;

  const hashIndex = connectionString.indexOf("#", queryIndex);
  const query = hashIndex >= 0 ? connectionString.slice(queryIndex + 1, hashIndex) : connectionString.slice(queryIndex + 1);
  if (!query) return undefined;

  try {
    return new URLSearchParams(query);
  } catch {
    return undefined;
  }
}

function stripSslParamsFromConnectionString(connectionString: string) {
  const queryIndex = connectionString.indexOf("?");
  if (queryIndex < 0) return connectionString;

  const base = connectionString.slice(0, queryIndex);
  const hashIndex = connectionString.indexOf("#", queryIndex);
  const query = hashIndex >= 0 ? connectionString.slice(queryIndex + 1, hashIndex) : connectionString.slice(queryIndex + 1);
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

function isTruthyEnv(value: string | undefined) {
  const normalized = normalizeEnv(value).toLowerCase();
  return normalized === "true" || normalized === "1" || normalized === "yes" || normalized === "on";
}

function getDatabaseConfig() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error("Missing DATABASE_URL");
  }

  const queryParams = getConnectionStringQueryParams(connectionString);
  const sslModeFromUrl = normalizeEnv(queryParams?.get("sslmode") ?? undefined).toLowerCase();
  const sslFromUrl = normalizeEnv(queryParams?.get("ssl") ?? undefined).toLowerCase();

  const pgSslMode = normalizeEnv(process.env.PGSSLMODE).toLowerCase();

  const sslModeEnablesSsl = new Set(["require", "verify-ca", "verify-full", "no-verify"]);
  const useSsl =
    isTruthyEnv(process.env.DATABASE_SSL) ||
    sslFromUrl === "true" ||
    sslFromUrl === "1" ||
    sslModeEnablesSsl.has(sslModeFromUrl) ||
    sslModeEnablesSsl.has(pgSslMode);

  const effectiveSslMode = sslModeFromUrl || pgSslMode;

  const rejectUnauthorizedEnv = normalizeEnv(process.env.DATABASE_SSL_REJECT_UNAUTHORIZED);
  const rejectUnauthorizedDefault = effectiveSslMode === "verify-ca" || effectiveSslMode === "verify-full";
  const rejectUnauthorized =
    rejectUnauthorizedEnv !== "" ? isTruthyEnv(rejectUnauthorizedEnv) : rejectUnauthorizedDefault;

  const ca = normalizeEnv(process.env.DATABASE_SSL_CA);
  const caPem = ca ? ca.replace(/\\n/g, "\n") : undefined;

  return {
    // NOTE: `pg` parses `connectionString` and can override `ssl` based on `sslmode`/`ssl` query params.
    // Strip SSL params so our explicit `ssl` options (esp. `rejectUnauthorized`) take precedence.
    connectionString: useSsl ? stripSslParamsFromConnectionString(connectionString) : connectionString,
    ssl: useSsl ? { rejectUnauthorized, ...(caPem ? { ca: caPem } : {}) } : undefined,
    max: 5,
    idleTimeoutMillis: 30_000,
    connectionTimeoutMillis: 10_000,
    query_timeout: 20_000,
  };
}

declare global {
  var __xplorebytePgPool: Pool | undefined;
}

export function getPool() {
  if (global.__xplorebytePgPool) return global.__xplorebytePgPool;
  const pool = new Pool(getDatabaseConfig());
  global.__xplorebytePgPool = pool;
  return pool;
}
