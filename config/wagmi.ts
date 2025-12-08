import { arbitrum, mainnet } from "@reown/appkit/networks";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import { clientEnv } from "@/config/env-client";

export const projectId = clientEnv.NEXT_PUBLIC_APPKIT_ID;

export const networks = [mainnet, arbitrum];

export const wagmiAdapter = new WagmiAdapter({
  ssr: true,
  projectId: String(projectId),
  networks,
});

export const config = wagmiAdapter.wagmiConfig;
