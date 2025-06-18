"server only";

import { env } from "@/config/env";
import { PinataSDK } from "pinata";

export const pinata = new PinataSDK({
  pinataJwt: `${env.server.pinataJwt}`,
  pinataGateway: `${env.client.pinataGatewayUrl}`,
});
