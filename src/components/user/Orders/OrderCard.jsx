import React from "react";

const OrderCard = ({ order, isSelected, onSelect, onViewDetails }) => {
  return (
    <div
      onClick={onSelect}
      className={`bg-gray-100 gap-8 shadow rounded p-4 cursor-pointer transition ${
        isSelected ? "border-l-4 border-[#0e4d65] bg-blue-50" : ""
      }`}
    >
      <p className="text-sm mb-4 text-gray-600">{order.status}</p>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex w-full md:w-1/2 gap-4 bg-white p-4">
          <img
            src={order.image}
            alt={order.name}
            className="w-20 h-20 object-cover rounded"
          />
          <div>
            <h4 className="font-semibold">{order.name}</h4>
            {order.deliveryWindow && (
              <p className="text-sm text-gray-500">{order.deliveryWindow}</p>
            )}
            <p className="text-sm mt-1">
              <span className="font-medium">Price:</span> {order.price}
            </p>
            <p className="text-sm">
              <span className="font-medium">Quantity:</span> {order.quantity}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full md:w-auto md:items-end">
          <button className="w-full">Track Order</button>
          <button
            className="border w-full bg-white border-gray-400 text-gray-700 px-4 py-1 rounded"
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails();
            }}
          >
            View Order Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
