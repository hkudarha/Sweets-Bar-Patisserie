import React from 'react'
import { FaSmile, FaMapMarkerAlt, FaTruck, FaUsers } from "react-icons/fa";

const stats = [
    {
      icon: <FaSmile className="text-4xl text-gray-800" />,
      value: "20+ Mn Smiles",
      label: "Delivered",
    },
    {
      icon: <FaMapMarkerAlt className="text-4xl text-gray-800" />,
      value: "20000+",
      label: "Pincodes Covered",
    },
    {
      icon: <FaTruck className="text-4xl text-gray-800" />,
      value: "620+ Cities",
      label: "Enjoying same-day delivery",
    },
    {
      icon: <FaUsers className="text-4xl text-gray-800" />,
      value: "1100+ Skilled",
      label: "Chefs & Florists On Board",
    },
  ];

const Achievements = () => {
  return (
    <div>
 <div className=" flex flex-wrap grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-xl flex flex-col items-center justify-center text-center p-6 shadow-sm"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold">{item.value}</h3>
              <p className="text-gray-600">{item.label}</p>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Achievements