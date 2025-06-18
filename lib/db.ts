import "dotenv/config";
import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import { env } from "@/config/env";

const client = createClient({
  url: env.server.dbUrl,
  authToken: env.server.dbToken,
});

export const db = drizzle({ client });
