import React from 'react';

const UserWallet = () => {
  return (
    <div className="p-4 space-y-6">
      <h3 className="">My Wallet</h3>

      <div className="bg-gray-100 p-4 rounded-xl shadow-sm flex justify-between items-center max-w-xl">
        <div>
          <h4 className="text-md font-semibold text-gray-800">FA Credits</h4>
          <p className="text-sm text-gray-500">
            Current Balance: <span className="font-medium text-gray-800">0 Cash</span> | <span className="font-medium text-gray-800">0 Rewards</span>
          </p>
        </div>
        <div className="text-2xl font-bold text-gray-800">₹ 0</div>
      </div>
      <div className="bg-white p-4 rounded-xl shadow-sm max-w-xl">
        <h4 className="text-center font-semibold text-gray-800 mb-3">Transaction History</h4>
        <div className="bg-gray-100 p-4 rounded-lg text-center text-sm text-gray-600">
          You have no transaction
        </div>
      </div>
    </div>
  );
};

export default UserWallet;
