import React from "react";
import { DonationType } from "../../../utils/types"; // Adjust the import path as needed

interface ConfirmationModalProps {
  selectedTier: DonationType | '';
  usdAmount: number;
  ethAmount: string;
  onClose: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ selectedTier, usdAmount, ethAmount, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg text-black">
        <h2 className="font-bold text-xl">Confirm Your Donation</h2>
        <p>Donation Tier: {selectedTier}</p>
        <p>USD Amount: ${usdAmount}</p>
        <p>Approx. ETH: {ethAmount}</p>
        <div className="flex justify-end space-x-2 mt-4">
          <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded-md">Cancel</button>
          <button onClick={() => console.log('continue')} className="px-4 py-2 bg-blue-500 text-white rounded-md">Continue</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
