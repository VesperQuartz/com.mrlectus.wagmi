import { z } from "zod/v4";

const envSchema = z
  .object({
    ETHERSCAN_KEY: z.string(),
    TURSO_DATABASE_URL: z.string(),
    TURSO_AUTH_TOKEN: z.string(),
    PINATA_API_KEY: z.string(),
    PINATA_SECRET: z.string(),
    PINATA_JWT: z.string(),
  })
  .readonly();

export const serverEnv = envSchema.parse(process.env);
