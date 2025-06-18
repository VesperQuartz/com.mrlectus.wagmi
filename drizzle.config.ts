import { defineConfig } from "drizzle-kit";
import { env } from "./config/env";

export default defineConfig({
  out: "./drizzle",
  schema: "./repo/schema/index.ts",
  dialect: "turso",
  dbCredentials: {
    url: env.server.dbUrl,
    authToken: env.server.dbToken,
  },
});
