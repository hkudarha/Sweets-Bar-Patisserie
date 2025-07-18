import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaUser, FaShoppingBag, FaWallet,
  FaAddressBook, FaCreditCard, FaUniversity,
  FaStar, FaCog, FaBars, FaTimes
} from "react-icons/fa";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "My Profile", path: "/user-dashboard/", icon: <FaUser />, exact: true },
    { name: "My Orders", path: "/user-dashboard/orders", icon: <FaShoppingBag /> },
    { name: "My Wallet", path: "/user-dashboard/wallet", icon: <FaWallet /> },
    { name: "Address Book", path: "/user-dashboard/address", icon: <FaAddressBook /> },
    { name: "Manage Saved Cards", path: "/user-dashboard/cards", icon: <FaCreditCard /> },
    { name: "Manage Saved UPI", path: "/user-dashboard/upi", icon: <FaUniversity /> },
    { name: "My Reviews", path: "/user-dashboard/reviews", icon: <FaStar /> },
    { name: "Account Settings", path: "/user-dashboard/settings", icon: <FaCog /> },
  ];

  return (
    <div>
      {/* Mobile Menu Icon */}
      <div
        onClick={() => setOpen(!open)}
        className="md:hidden !text-2xl m-2 text-[#0e4d65]"
      >
        {open ? <FaTimes /> : <FaBars />}
      </div>

      
      <div
        className={`
          bg-white shadow-lg h-full md:static fixed top-0 left-0 z-50
          w-64 transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0
        `}
      >
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.exact}
            onClick={() => setOpen(false)} 
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-[1rem] hover:bg-gray-100 ${
                isActive ? "bg-gray-200 font-semibold border-l-4 border-[#0e4d65]" : ""
              }`
            }
          >
            <span className="text-lg text-[#0e4d65]">{item.icon}</span>
            <span>{item.name}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
