import React, { useState, useEffect } from "react";
import AddressForm from "./AddressForm";
import AddressList from "./AddressList";
import { createAddress, getAddresses, } from "../../../api/user.api";

const AddressBook = () => {
  const [showForm, setShowForm] = useState(false);
  const [addresses, setAddresses] = useState([]);

  const handleAddNew = () => setShowForm(true);
  const handleSeeAll = () => setShowForm(false);

  // Fetch all addresses when component mounts
  useEffect(() => {
    fetchAddresses();
  }, []);

  const fetchAddresses = async () => {
    try {
      const data = await getAddresses();
      setAddresses(data);
    } catch (err) {
      console.error("❌ Failed to fetch addresses", err);
      alert("❌ Failed to fetch addresses.");
    }
  };

  const handleSubmit = async (payload, resetForm) => {
    try {
      const res = await createAddress(payload);
      setAddresses((prev) => [...prev, res.address]);
      setShowForm(false);
      resetForm();
    } catch (err) {
      console.error(err);
      alert("❌ Failed to add address.");
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteAddress(id);
      const filtered = addresses.filter((addr) => addr._id !== id);
      setAddresses(filtered);
    } catch (err) {
      console.error("❌ Failed to delete address", err);
      alert("❌ Failed to delete address.");
    }
  };

  return (
    <div className="sm:p-[1rem] p-[0.5rem]">
      {!showForm ? (
        <AddressList
          addresses={addresses}
          onDelete={handleDelete}
          onAddNew={handleAddNew}
        />
      ) : (
        <AddressForm
          onSubmit={handleSubmit}
          onCancel={handleSeeAll}
        />
      )}
    </div>
  );
};

export default AddressBook;
