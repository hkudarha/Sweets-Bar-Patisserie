import React, { useState } from 'react';
// import { trackOrder } from '../api/user.api';

const TrackYourOrder = () => {
  const [orderId, setOrderId] = useState('');
  const [email, setEmail] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState('');

  const handleTrackOrder = async (e) => {
    e.preventDefault();
    setError('');
    setResponse(null);

    try {
      const data = await trackOrder({ orderId, email });
      setResponse(data);
    } catch (err) {
      const message =
        err.response?.data?.message || 'Failed to track order. Please check your details.';
      setError(message);
    }
  };

  return (
    <div className="bg-[#f4f7f8] py-[2rem] flex flex-col items-center justify-center py-[3 rem]">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-4 text-[#0c4a61]">
        Track Your Sweets Bar Patisserie  Order
      </h1>

      <div className="bg-white shadow-md rounded-xl p-6 sm:p-8 w-full max-w-md sm:max-w-lg md:max-w-xl">
        <h3 className="text-[1.2rem] font-extrabold text-center text-[#0c4a61] mb-6">
          Track Your Orders
        </h3>
        <form onSubmit={handleTrackOrder} className="space-y-4">
          <input
            type="text"
            placeholder="Enter order ID*"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0c4a61]"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email ID*"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0c4a61]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full "
          >
            Track Order
          </button>
        </form>

        {response && (
          <div className="mt-4 text-green-600 text-center text-sm sm:text-base">
            Order Status: {response.status}
          </div>
        )}

        {error && (
          <div className="mt-4 text-red-600 text-center text-sm sm:text-base">
            {error}
          </div>
        )}
      </div>

      <a
        href="/"
        className="text-blue-700 font-semibold underline mt-6 text-sm sm:text-base"
      >
        Continue Shopping
      </a>
    </div>
  );
};

export default TrackYourOrder;
