import React from 'react';
import { useNavigate } from "react-router-dom";
import products from './SalingCardsProducts';

const SalingCards = () => {
  const navigate = useNavigate();

  const handleClick = (index) => {
    navigate(`/product/${index}`);
  };

  return (
    <div
      data-aos="fade-up"
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-6"
    >
      {products.map((product, index) => (
        <div
          key={index}
          onClick={() => handleClick(index)}
          className="border cursor-pointer overflow-hidden border-gray-300 rounded-lg shadow hover:shadow-md transition"
        >
          <div className="overflow-hidden w-full h-52">
            <img
              src={product.image}
              alt={product.name}
              className="object-cover w-full h-52 transform transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="p-[1rem]">
            <h3 className="mt-2 text-sm font-medium">{product.name}</h3>
            <p className="mt-1 text-gray-800 font-semibold">₹ {product.price}</p>
            <div className="flex items-center mt-1 gap-1 text-sm">
              <span className="bg-green-600 text-white px-1 rounded text-xs">
                {product.rating} ★
              </span>
              <span className="text-blue-600">({product.reviews} Reviews)</span>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Earliest Delivery: {product.delivery}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SalingCards;
