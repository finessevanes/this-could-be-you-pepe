function DonationCard() {
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
                  <select className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900">
                    <option value="GOLD">GOLD - $100</option>
                    <option value="SILVER">SILVER - $50</option>
                    <option value="BRONZE">BRONZE - $25</option>
                    <option value="WAGMI">WAGMI - $5</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label className="leading-loose">Equivalent in ETH:</label>
                  <input
                    type="text"
                    className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900"
                    placeholder="Automatically calculated"
                    disabled
                  />
                </div>
                <div className="flex items-center space-x-4">
                  <button className="flex justify-center items-center w-full text-white px-4 py-3 bg-blue-500 rounded-md focus:outline-none">
                    Donate
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default DonationCard;
  