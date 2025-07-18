import React, { useState } from "react";

const UserProfile = ({ user }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => setIsEditing(true);
  const handleUpdate = () => setIsEditing(false);

  if (!user) return null;

  return (
    <div className="sm:p-[1rem] p-[0.5rem] max-w-xl mx-auto">
      <h3 className=" mb-4">Profile Details</h3>

      {!isEditing ? (
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-500">Name</span>
            <span className="font-medium">{user.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Birthday</span>
            <span className="font-medium">07 July</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Gender</span>
            <span className="font-medium">Female</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Mobile</span>
            <span className="font-medium">{user.phone}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Email*</span>
            <span className="font-medium">{user.email}</span>
          </div>

          <div className="mt-6">
            <button
              onClick={handleEdit}
              className="px-4 py-2 border border-gray-400 rounded hover:bg-gray-100"
            >
              Edit Profile
            </button>
          </div>
        </div>
      ) : (
        <form className="space-y-4">
  {/* Name */}
  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
    <label className="md:w-28 font-medium text-sm">Name</label>
    <div className="flex gap-2 flex-1">
      <select className="border rounded px-2 py-1 w-20">
        <option>Mr.</option>
        <option>Mrs.</option>
        <option>Miss</option>
      </select>
      <input
        type="text"
        defaultValue={user.name}
        className="border rounded px-2 py-1 flex-1"
      />
    </div>
  </div>

  {/* Birthday */}
  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
    <label className="md:w-28 font-medium text-sm">Birthday</label>
    <div className="flex gap-2 flex-1">
      <select className="border rounded px-2 py-1 w-20">
        {Array.from({ length: 31 }, (_, i) => (
          <option key={i + 1} value={i + 1}>
            {String(i + 1).padStart(2, "0")}
          </option>
        ))}
      </select>
      <select className="border rounded px-2 py-1 flex-1">
        {[
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ].map((month, index) => (
          <option key={index} value={month}>
            {month}
          </option>
        ))}
      </select>
    </div>
  </div>

  {/* Gender */}
  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
    <label className="md:w-28 font-medium text-sm">Gender</label>
    <div className="flex gap-4 flex-1 flex-wrap">
      <label className="flex items-center gap-1">
        <input type="radio" name="gender" /> Male
      </label>
      <label className="flex items-center gap-1">
        <input type="radio" name="gender" defaultChecked /> Female
      </label>
      <label className="flex items-center gap-1">
        <input type="radio" name="gender" /> Others
      </label>
    </div>
  </div>

  {/* Update Button */}
  <div>
    <button
      type="button"
      onClick={handleUpdate}
      className="px-6 py-2 bg-[#0e4d65] text-white rounded hover:bg-[#093649]"
    >
      Update Profile
    </button>
  </div>

  <hr className="my-4" />

  {/* Mobile */}
  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
    <label className="md:w-28 font-medium text-sm">Mobile</label>
    <input
      type="text"
      defaultValue={user.phone}
      className="border px-2 py-1 flex-1"
    />
  </div>

  {/* Email */}
  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
    <label className="md:w-28 font-medium text-sm">Email*</label>
    <span className="break-words">{user.email}</span>
  </div>
</form>

      )}
    </div>
  );
};

export default UserProfile;
