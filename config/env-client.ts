"use client";
import { z } from "zod";

const envSchema = z
  .object({
    NEXT_PUBLIC_APPKIT_ID: z
      .string()
      .default("e40332709dbd692f51f7e603f98377a1")
      .optional(),
    NEXT_PUBLIC_PINATA_GATEWAY_URL: z
      .string()
      .default("beige-magnificent-chipmunk-792.mypinata.cloud")
      .optional(),
  })
  .readonly();

export const clientEnv = envSchema.parse(process.env);
