import React from "react";
import { FaTimes } from "react-icons/fa";

const RemoveCardItem = ({ isOpen, onClose, onConfirm, item }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-50 px-4"
      style={{ overflowY: "auto" }}
    >
      <div className="bg-white rounded-md shadow-lg w-full max-w-sm sm:max-w-md md:max-w-lg">
        <div className="flex justify-between items-center bg-blue-100 p-4 rounded-t-md">
          <h3 className="font-semibold text-blue-900 text-sm sm:text-base md:text-lg">
            Remove from cart
          </h3>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-red-500"
          >
            <FaTimes size={18} />
          </button>
        </div>

        <div className="p-4 flex gap-3 items-center flex-wrap">
          <img
            src={item.img}
            alt={item.name}
            className="w-16 h-16 object-cover rounded"
          />
          <p className="text-sm sm:text-base">
            Are you sure you want to remove{" "}
            <strong>{item.name}</strong>?
          </p>
        </div>

        <div className="px-4 pb-4 flex gap-4 justify-end flex-wrap">
          <button
            onClick={onClose}
            className="px-4 py-2 border rounded text-gray-700 text-sm sm:text-base"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-blue-900 text-white rounded text-sm sm:text-base"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default RemoveCardItem;
