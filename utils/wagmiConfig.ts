import { http, createConfig } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'

const alchemyKey = process.env.ALCHEMY_API_KEY;
export const config = createConfig({
  chains: [mainnet, sepolia],
  transports: {
    [mainnet.id]: http(`https://eth-sepolia.g.alchemy.com/v2/${alchemyKey}`),
    [sepolia.id]: http(`https://eth-sepolia.g.alchemy.com/v2/${alchemyKey}`),
  },
})
