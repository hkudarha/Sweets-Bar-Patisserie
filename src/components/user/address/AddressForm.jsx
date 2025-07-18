import React, { useState } from "react";

const AddressForm = ({ onSubmit, onCancel }) => {
  const [title, setTitle] = useState("Mr.");
  const [name, setName] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [stateName, setStateName] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [country, setCountry] = useState("India");
  const [phone, setPhone] = useState("");
  const [addressType, setAddressType] = useState("");

  const [errors, setErrors] = useState({});

  const resetForm = () => {
    setTitle("Mr.");
    setName("");
    setHouseNumber("");
    setStreet("");
    setCity("");
    setStateName("");
    setPinCode("");
    setCountry("India");
    setPhone("");
    setAddressType("");
    setErrors({});
  };

  const validate = () => {
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = "Name is required";
    } else if (!/^[a-zA-Z\s]{2,}$/.test(name.trim())) {
      newErrors.name = "Enter a valid name";
    }

    if (!city.trim()) {
      newErrors.city = "City is required";
    } else if (!/^[a-zA-Z\s]{2,}$/.test(city.trim())) {
      newErrors.city = "Enter a valid city";
    }

    if (!pinCode.trim()) {
      newErrors.pinCode = "Pin Code is required";
    } else if (!/^\d{6}$/.test(pinCode.trim())) {
      newErrors.pinCode = "Pin Code must be 6 digits";
    }

    if (!phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(phone.trim())) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const payload = {
      receiverName: `${title} ${name}`,
      phoneNumber: phone,
      houseNumber,
      street,
      city,
      state: stateName,
      pinCode,
      country,
      addressType,
    };

    onSubmit(payload, resetForm);
  };

  const errorStyle = "text-red-600 text-xs mt-1";

  return (
    <div>
      <h3 className="font-bold text-[1.2rem] mb-6">Address Book</h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
          <label className="md:w-48 font-medium text-sm">
            Receiver Name<span className="text-red-600">*</span>
          </label>
          <div className="flex gap-2 flex-1">
            <select
              className="border rounded px-2 py-1 w-20"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            >
              <option>Mr.</option>
              <option>Mrs.</option>
              <option>Miss</option>
            </select>
            <div className="flex flex-col flex-1">
              <input
                type="text"
                placeholder="Name"
                className="border rounded px-2 py-1 flex-1"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && <span className={errorStyle}>{errors.name}</span>}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
          <label className="md:w-48 font-medium text-sm">House No.</label>
          <input
            type="text"
            className="border rounded px-2 py-1 flex-1"
            value={houseNumber}
            onChange={(e) => setHouseNumber(e.target.value)}
          />
        </div>

        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
          <label className="md:w-48 font-medium text-sm">
            Street / Locality
          </label>
          <input
            type="text"
            className="border rounded px-2 py-1 flex-1"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          />
        </div>

        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
          <label className="md:w-48 font-medium text-sm">
            Delivery City<span className="text-red-600">*</span>
          </label>
          <div className="flex flex-col flex-1">
            <input
              type="text"
              className="border rounded px-2 py-1"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            {errors.city && <span className={errorStyle}>{errors.city}</span>}
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
          <label className="md:w-48 font-medium text-sm">
            State
          </label>
          <input
            type="text"
            className="border rounded px-2 py-1 flex-1"
            value={stateName}
            onChange={(e) => setStateName(e.target.value)}
          />
        </div>

        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
          <label className="md:w-48 font-medium text-sm">
            PinCode<span className="text-red-600">*</span>
          </label>
          <div className="flex flex-col flex-1">
            <input
              type="text"
              className="border rounded px-2 py-1"
              value={pinCode}
              onChange={(e) => setPinCode(e.target.value)}
            />
            {errors.pinCode && <span className={errorStyle}>{errors.pinCode}</span>}
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
          <label className="md:w-48 font-medium text-sm">
            Country
          </label>
          <input
            type="text"
            className="border rounded px-2 py-1 flex-1"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>

        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
          <label className="md:w-48 font-medium text-sm">
            Shipping Phone No.<span className="text-red-600">*</span>
          </label>
          <div className="flex flex-col flex-1">
            <input
              type="text"
              className="border rounded px-2 py-1"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            {errors.phone && <span className={errorStyle}>{errors.phone}</span>}
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
          <label className="md:w-48 font-medium text-sm">
            Address Type
          </label>
          <div className="flex gap-4 flex-wrap">
            <label className="flex items-center gap-1 cursor-pointer">
              <input
                type="radio"
                value="Home"
                checked={addressType === "Home"}
                onChange={(e) => setAddressType(e.target.value)}
              />{" "}
              <span>Home</span>
            </label>
            <label className="flex items-center gap-1 cursor-pointer">
              <input
                type="radio"
                value="Office"
                checked={addressType === "Office"}
                onChange={(e) => setAddressType(e.target.value)}
              />{" "}
              <span>Office</span>
            </label>
            <label className="flex items-center gap-1 cursor-pointer">
              <input
                type="radio"
                value="Others"
                checked={addressType === "Others"}
                onChange={(e) => setAddressType(e.target.value)}
              />{" "}
              <span>Others</span>
            </label>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-6 gap-2">
          <button
            type="submit"
            className="px-6 py-2 bg-[#0e4d65] text-white rounded hover:bg-[#093649]"
          >
            Add Address
          </button>
          <p
            onClick={onCancel}
            className="text-sm text-blue-700 underline cursor-pointer"
          >
            See All Saved Address
          </p>
        </div>
      </form>
    </div>
  );
};

export default AddressForm;
