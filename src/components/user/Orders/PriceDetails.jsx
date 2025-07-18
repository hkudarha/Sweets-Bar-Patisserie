import React from "react";

const PriceDetails = ({ priceDetails }) => {
  return (
    <div className="bg-white shadow rounded p-4">
      <h4 className="font-semibold mb-3 text-gray-700">Price Details</h4>
      <div className="space-y-1 text-sm text-gray-700">
        <div className="flex justify-between">
          <span>List price</span>
          <span className="line-through text-gray-500">
            ₹{priceDetails.listPrice}
          </span>
        </div>
        <div className="flex justify-between">
          <span>Selling price</span>
          <span>₹{priceDetails.sellingPrice}</span>
        </div>
        <div className="flex justify-between">
          <span>Extra Discount</span>
          <span className="text-green-600">
            - ₹{priceDetails.extraDiscount}
          </span>
        </div>
        <div className="flex justify-between">
          <span>Special Price</span>
          <span>₹{priceDetails.specialPrice}</span>
        </div>
        <div className="flex justify-between">
          <span>Handling Fee</span>
          <span className="text-green-600">
            {priceDetails.handlingFee === 0
              ? "Free"
              : `₹${priceDetails.handlingFee}`}
          </span>
        </div>
        <div className="flex justify-between">
          <span>Promotion discount</span>
          <span>₹{priceDetails.promoDiscount}</span>
        </div>
        <div className="flex justify-between">
          <span>Protect Promise Fee</span>
          <span>₹{priceDetails.protectFee}</span>
        </div>
      </div>
      <hr className="my-2" />
      <div className="flex justify-between font-semibold text-gray-800">
        <span>Total Amount</span>
        <span>₹{priceDetails.totalAmount}</span>
      </div>
    </div>
  );
};

export default PriceDetails;
