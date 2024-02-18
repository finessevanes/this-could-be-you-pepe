"use client";

import { WagmiProvider } from "wagmi";
import { createWeb3Modal } from "@web3modal/wagmi/react";
import { config } from "../../utils/web3modalConfig";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import DonationCard from "./components/DonationCard";

const queryClient = new QueryClient();

createWeb3Modal({
  wagmiConfig: config,
  projectId,
});

export default function Home() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
          <DonationCard />
        </div>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
