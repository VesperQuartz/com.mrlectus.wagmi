"use client";

import { arbitrum, mainnet } from "@reown/appkit/networks";
import { createAppKit } from "@reown/appkit/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { ReactNode } from "react";
import { type Config, cookieToInitialState, WagmiProvider } from "wagmi";
import { clientEnv } from "@/config/env-client";
import { wagmiAdapter } from "@/config/wagmi";

const queryClient = new QueryClient();

const metadata = {
  name: "appkit-example",
  description: "AppKit Example",
  url: "https://appkitexampleapp.com", // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/179229932"],
};

console.log(
  "CID",
  clientEnv.NEXT_PUBLIC_APPKIT_ID,
  clientEnv.NEXT_PUBLIC_PINATA_GATEWAY_URL,
);
export const modal = createAppKit({
  adapters: [wagmiAdapter],
  projectId: String(clientEnv.NEXT_PUBLIC_APPKIT_ID),
  networks: [mainnet, arbitrum],
  defaultNetwork: mainnet,
  metadata: metadata,
  features: {
    analytics: true, // Optional - defaults to your Cloud configuration
  },
});

const WagmiContextProvider = ({ children }: { children: ReactNode }) => {
  const initialState = cookieToInitialState(wagmiAdapter.wagmiConfig as Config);

  return (
    <WagmiProvider
      config={wagmiAdapter.wagmiConfig as Config}
      initialState={initialState}
    >
      <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default WagmiContextProvider;
