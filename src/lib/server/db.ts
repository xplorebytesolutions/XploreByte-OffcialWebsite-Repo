import "server-only";
import { Pool } from "pg";

function getDatabaseConfig() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error("Missing DATABASE_URL");
  }

  const useSsl =
    process.env.DATABASE_SSL === "true" ||
    process.env.PGSSLMODE === "require" ||
    process.env.PGSSLMODE === "verify-ca" ||
    process.env.PGSSLMODE === "verify-full";

  return {
    connectionString,
    ssl: useSsl ? { rejectUnauthorized: false } : undefined,
  };
}

declare global {
  // eslint-disable-next-line no-var
  var __xplorebytePgPool: Pool | undefined;
}

export function getPool() {
  if (global.__xplorebytePgPool) return global.__xplorebytePgPool;
  const pool = new Pool(getDatabaseConfig());

  if (process.env.NODE_ENV !== "production") {
    global.__xplorebytePgPool = pool;
  }

  return pool;
}

