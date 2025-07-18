import React from "react";
import AddressItem from "./AddressItem";

const AddressList = ({ addresses, onDelete, onAddNew }) => (
  <div className="flex flex-col gap-4">
    <h3 className="font-bold text-[1.2rem]">Address Book</h3>

    <button
      onClick={onAddNew}
      className="px-4 py-2 border border-[#0e4d65] bg-white text-[#0e4d65] rounded hover:bg-[#0e4d65] hover:text-white w-fit"
    >
      + Add New Address
    </button>

    {addresses.length > 0 && (
      <div className="mt-4 space-y-4">
        {addresses.map((addr) => (
          <AddressItem key={addr._id} addr={addr} onDelete={onDelete} />
        ))}
      </div>
    )}
  </div>
);

export default AddressList;
