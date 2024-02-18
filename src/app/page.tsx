"use client";

import { WagmiProvider } from "wagmi";
import { config } from "../../utils/wagmiConfig";
import DonationCard from "./components/DonationCard";

export default function Home() {
  return (
    <WagmiProvider config={config}>
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <DonationCard />
      </div>
    </WagmiProvider>
  );
}
