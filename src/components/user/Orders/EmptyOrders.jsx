import React from "react";
import { FaBoxOpen } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

const EmptyOrders = () => {
  return (
    <div className="flex items-center gap-3 bg-gray-100 rounded p-4">
      <div className="relative flex items-center">
        <FaBoxOpen className="text-4xl text-[#0e4d65]" />
        <MdCancel className="absolute -bottom-1 -right-2 text-red-500 text-lg bg-white rounded-full" />
      </div>
      <p className="text-gray-700 font-medium">You haven’t added any order yet</p>
    </div>
  );
};

export default EmptyOrders;
