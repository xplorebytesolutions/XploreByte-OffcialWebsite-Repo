import "server-only";
import { Pool } from "pg";

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
    const sslMode = url.searchParams.get("sslmode");
    const ssl = url.searchParams.get("ssl");
    
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
    useSsl = 
      connectionString.includes("sslmode=require") || 
      connectionString.includes("ssl=true");
  }

  // Environment variable overrides
  if (
      process.env.DATABASE_SSL === "true" ||
      process.env.PGSSLMODE === "require" ||
      process.env.PGSSLMODE === "verify-ca" || 
      process.env.PGSSLMODE === "verify-full"
  ) {
    useSsl = true;
  }

  // Default to FALSE for rejectUnauthorized unless explicitly set to 'true'
  // This solves "unable to verify the first certificate" for self-signed/managed DBs
  const rejectUnauthorized = process.env.DATABASE_SSL_REJECT_UNAUTHORIZED === "true";

  return {
    connectionString,
    // If SSL is used, we explicitly configure it.
    // By passing the object, we override potential strict defaults from the connection string.
    ssl: useSsl ? { rejectUnauthorized } : undefined,
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
