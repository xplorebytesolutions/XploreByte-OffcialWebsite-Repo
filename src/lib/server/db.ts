import "server-only";
import { Pool } from "pg";

function normalizeEnv(value: string | undefined) {
  return typeof value === "string" ? value.trim() : "";
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

  // Robustly determine if SSL is required based on connection string or env vars
  let useSsl = false;

  try {
    // Attempt standard URL parsing (handles special chars in passwords correctly)
    const url = new URL(connectionString);
    const sslMode = url.searchParams.get("sslmode")?.trim().toLowerCase();
    const ssl = url.searchParams.get("ssl")?.trim().toLowerCase();

    useSsl =
      sslMode === "require" ||
      sslMode === "verify-ca" ||
      sslMode === "verify-full" ||
      ssl === "true" ||
      ssl === "1" ||
      url.protocol === "https:"; // unlikely for postgres but good measure
  } catch {
    // Fallback if URL parsing fails (e.g. invalid format), check simple string inclusion
    // Note: This is less robust but a safety net
    const csLower = connectionString.toLowerCase();
    useSsl = csLower.includes("sslmode=require") || csLower.includes("ssl=true");
  }

  // Environment variable overrides
  if (
    isTruthyEnv(process.env.DATABASE_SSL) ||
    ["require", "verify-ca", "verify-full"].includes(normalizeEnv(process.env.PGSSLMODE).toLowerCase())
  ) {
    useSsl = true;
  }

  // Default to FALSE for rejectUnauthorized unless explicitly set to 'true'
  // This solves "unable to verify the first certificate" for self-signed/managed DBs
  const rejectUnauthorized = isTruthyEnv(process.env.DATABASE_SSL_REJECT_UNAUTHORIZED);

  const ca = normalizeEnv(process.env.DATABASE_SSL_CA);
  const caPem = ca ? ca.replace(/\\n/g, "\n") : undefined;

  return {
    connectionString,
    // If SSL is used, we explicitly configure it.
    // By passing the object, we override potential strict defaults from the connection string.
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
