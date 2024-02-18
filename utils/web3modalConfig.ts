import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";
import { sepolia, mainnet } from "wagmi/chains";

const metadata = {
  name: "This could be you",
  description: "A charity donation app",
  url: "https://web3modal.com", // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const chains = [mainnet, sepolia] as const;

export const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  enableCoinbase: false,
});
