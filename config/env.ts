import { z } from "zod/v4";
const envSchema = z
  .object({
    server: z.object({
      etherScanKey: z.string(),
      dbUrl: z.string(),
      dbToken: z.string(),
      pinataApiKey: z.string().optional(),
      pinataSecret: z.string().optional(),
      pinataJwt: z.string().optional(),
    }),
    client: z.object({
      appKitId: z.string(),
      pinataGatewayUrl: z.string().optional(),
    }),
  })
  .readonly();

export const env = envSchema.parse({
  server: {
    etherScanKey: process.env.ETHERSCAN_KEY,
    dbUrl: process.env.TURSO_DATABASE_URL,
    dbToken: process.env.TURSO_AUTH_TOKEN,
    pinataApiKey: process.env.PINATA_API_KEY,
    pinataSecret: process.env.PINATA_SECRET,
    pinataJwt: process.env.PINATA_JWT,
  },
  client: {
    appKitId: process.env.NEXT_PUBLIC_APPKIT_ID,
    pinataGatewayUrl: process.env.NEXT_PUBLIC_PINATA_GATEWAY_URL,
  },
});
