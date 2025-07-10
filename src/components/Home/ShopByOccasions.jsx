import React from 'react';
import { Link } from 'react-router-dom';
import img1 from "../../assets/Home/img1.avif";
import img2 from "../../assets/Home/img2.avif";
import img3 from "../../assets/Home/img3.avif";
import img4 from "../../assets/Home/img4.avif";

const ShopByOccasions = () => {
  const cards = [
    {
      img: img1,
      title: "Birthday Gifts",
      to: "/birthday-gifts",
    },
    {
      img: img2,
      title: "Anniversary Gifts",
      to: "/anniversary-gifts",
    },
    {
      img: img3,
      title: "Gifts for Him",
      to: "/gifts-for-him",
    },
    {
      img: img4,
      title: "Gifts for Her",
      to: "/gifts-for-her",
    },
  ];

  return (
    <div className="px-[2rem] sm:px-[4rem] py-8">
      <div data-aos="fade-up" className="text-center mb-6">
        <h2 className="">Shop By Occasions & Relations</h2>
        <p className="text-gray-500">Surprise Your Loved Ones</p>
      </div>

      <div data-aos="fade-up" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <Link
            key={index}
            to={card.to}
            className="group bg-white rounded-t-[50%] overflow-hidden cursor-pointer border border-gray-300"
          >
            <img
              src={card.img}
              alt={card.title}
              className="w-full transition-transform transform hover:scale-105 object-cover duration-300"
            />
            <div className="text-center py-4">
              <h3 className="text-lg font-semibold">{card.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ShopByOccasions;
