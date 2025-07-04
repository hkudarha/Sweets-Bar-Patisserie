import React from 'react';

import img1 from "../../assets/cards/blue-orchids-bouquet-n-choco-cake-9813430co-A_0.avif";
import img2 from "../../assets/cards/blue-orchids-bouquet-n-choco-cake-9813430co-C_1.avif";
import img3 from "../../assets/cards/DSC_1243_0.jpg";
import img4 from "../../assets/cards/DSC_1964_0.avif";
import img5 from "../../assets/cards/engraved-acrylic-photo-lamp-B_0.avif";
import img6 from "../../assets/cards/jade-terrarium-9978940pl-D.avif";
import img7 from "../../assets/cards/luscious-rasmalai-pista-cream-cake-9815470ca-A.avif";
import img8 from "../../assets/cards/profuse-jade-terrarium-9969080pl-A_0.avif";
import img9 from "../../assets/cards/scrumptious-vanilla-cake-9993570ca-AAA.avif";
import img10 from "../../assets/cards/the-long-distance-hug-pillow-9788200sd-A_0.avif";

const products = [
    {
        name: "10 Red Roses Bouquet",
        price: 545,
        rating: 4.9,
        reviews: 1638,
        delivery: "In 3 hours",
        image: img1,
    },
    {
        name: "Profuse Jade Terrarium",
        price: 685,
        rating: 4.9,
        reviews: 68,
        delivery: "In 3 hours",
        image: img8,
        offer: "40% OFF",
    },
    {
        name: "Chocolate Truffle Cake",
        price: 595,
        rating: 4.9,
        reviews: 824,
        delivery: "In 3 hours",
        image: img4,
    },
    {
        name: "Engraved Acrylic Photo Lamp",
        price: 990,
        rating: 5.0,
        reviews: 2,
        delivery: "2-3 days",
        image: img5,
    },
    {
        name: "Blue Orchids & Choco Cake Combo",
        price: 899,
        rating: 4.8,
        reviews: 543,
        delivery: "Today",
        image: img2,
    },
    {
        name: "Rasmalai Pista Cream Cake",
        price: 749,
        rating: 4.7,
        reviews: 312,
        delivery: "In 4 hours",
        image: img7,
    },
    {
        name: "Scrumptious Vanilla Cake",
        price: 499,
        rating: 4.6,
        reviews: 278,
        delivery: "Tomorrow",
        image: img9,
    },
    {
        name: "The Long Distance Hug Pillow",
        price: 649,
        rating: 4.5,
        reviews: 112,
        delivery: "2-3 days",
        image: img10,
    },
];


const SalingCards = () => {
    return (
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-6">
  {products.map((product, index) => (
    <div
      key={index}
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
        {product.offer && (
          <span className="text-xs text-orange-600 font-medium">
            {product.offer}
          </span>
        )}
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
