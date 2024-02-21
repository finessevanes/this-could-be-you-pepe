import React, { use, useState, useEffect } from "react";
import { useWeb3Modal } from '@web3modal/wagmi/react'
import { useContractRead, Abi } from "wagmi"
import charityFundAbi from "../../../json/charityFundAbi.json"
import ConfirmationModal from "../components/ConfirmationModal";
import { DonationType } from "../../../utils/types"; // Ensure this path matches your project structure

const abi: Abi = charityFundAbi as Abi;
const CHARITY_FUND_ADDRESS = '0xbd58249f6352bffb210d9ad4c77d68fc871b00a8';

enum DonationTier {
  GOLD,
  SILVER,
  BRONZE,
  WAGMI,
}

function DonationCard() {
  const [selectedTier, setSelectedTier] = useState<DonationType | ''>('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { open } = useWeb3Modal()

  // Placeholder function for calculating ETH value
  const usdToEth = (usdAmount: number) => {
    return (usdAmount / 2000).toFixed(4); // Assuming a static conversion rate for illustration
  };

  const handleDonateClick = () => {
    setIsModalOpen(true); // Open the modal
  };

  const handleTierChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTier(e.target.value as DonationType);
  };

  const { data, isError, isLoading } = useContractRead({
    address: CHARITY_FUND_ADDRESS,
    abi,
    functionName: 'owner',
  })

  return (
    <div className="relative py-3 sm:max-w-xl sm:mx-auto">
      <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
      <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
        <div className="max-w-md mx-auto">
          <div>
            <h1 className="text-2xl font-semibold">Make a Donation</h1>
          </div>
          <div className="divide-y divide-gray-200">
            <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
              <div className="flex flex-col">
                <label className="leading-loose">Select Donation Tier:</label>
                <select 
                  className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900" 
                  value={selectedTier} 
                  onChange={handleTierChange}>
                  <option value="">Select a tier</option>
                  <option value={DonationType.GOLD}>GOLD - $100</option>
                  <option value={DonationType.SILVER}>SILVER - $50</option>
                  <option value={DonationType.BRONZE}>BRONZE - $25</option>
                  <option value={DonationType.WAGMI}>WAGMI - $5</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label className="leading-loose">Equivalent in ETH:</label>
                <input
                  type="text"
                  className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900"
                  value={selectedTier ? usdToEth(selectedTier === DonationType.GOLD ? 100 : selectedTier === DonationType.SILVER ? 50 : selectedTier === DonationType.BRONZE ? 25 : 5) : ''}
                  placeholder="Automatically calculated"
                  disabled
                />
              </div>
              <div className="flex items-center space-x-4">
                <button 
                  className="flex justify-center items-center w-full text-white px-4 py-3 bg-blue-500 rounded-md focus:outline-none"
                  onClick={handleDonateClick}>
                  Donate
                </button>
                <button onClick={() => open()}>Open Connect Modal</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <ConfirmationModal
          selectedTier={selectedTier}
          usdAmount={selectedTier === DonationType.GOLD ? 100 : selectedTier === DonationType.SILVER ? 50 : selectedTier === DonationType.BRONZE ? 25 : 5}
          ethAmount={usdToEth(selectedTier === DonationType.GOLD ? 100 : selectedTier === DonationType.SILVER ? 50 : selectedTier === DonationType.BRONZE ? 25 : 5)}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
}

export default DonationCard;
