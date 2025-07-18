import React from "react";

const AddressItem = ({ addr, onDelete }) => (
  <div className="p-4 border rounded bg-gray-50 relative">
    <p><strong>Receiver Name:</strong> {addr.receiverName}</p>
    <p><strong>Phone:</strong> {addr.phoneNumber}</p>
    <p><strong>House No:</strong> {addr.houseNumber}</p>
    <p><strong>Street:</strong> {addr.street}</p>
    <p><strong>City:</strong> {addr.city}</p>
    <p><strong>State:</strong> {addr.state}</p>
    <p><strong>PinCode:</strong> {addr.pinCode}</p>
    <p><strong>Country:</strong> {addr.country}</p>
    <p><strong>Type:</strong> {addr.addressType}</p>
    <button
      onClick={() => onDelete(addr._id)}
      className="absolute top-2 right-2 text-red-600 text-sm hover:underline"
    >
      Delete
    </button>
  </div>
);

export default AddressItem;
