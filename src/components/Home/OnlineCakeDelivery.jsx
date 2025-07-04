import React from 'react';
import { Link } from 'react-router-dom';

import cake1 from "../../assets/cake/all-cake.jpg";
import cake2 from "../../assets/cake/anniversary-cakes_2.jpg";
import cake3 from "../../assets/cake/birthday_cake.jpg";
import cake4 from "../../assets/cake/designer-cakes.jpg";
import cake5 from "../../assets/cake/mango-cakes_5.png";
import cake6 from "../../assets/cake/photo-cakes_2.jpg";

const cakes = [
  { name: "All Cakes", image: cake1, link: "/cakes/all" },
  { name: "Birthday Cakes", image: cake3, link: "/cakes/birthday" },
  { name: "Designer Cakes", image: cake4, link: "/cakes/designer" },
  { name: "Anniversary Cakes", image: cake2, link: "/cakes/anniversary" },
  { name: "Mango Cakes", image: cake5, link: "/cakes/mango" },
  { name: "Photo Cakes", image: cake6, link: "/cakes/photo" },
];

const OnlineCakeDelivery = () => {
  return (
    <div className="px-[2rem] sm:px-[4rem] py-8">
      
      <div className="text-center mb-6">
        <h2>Online Cake Delivery</h2>
        <p>
          Baked Fresh, Delivered Fresh
        </p>
      </div>

      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
  {cakes.map((cake, index) => (
    <Link
      to={cake.link}
      key={index}
      className="flex flex-col items-center group cursor-pointer"
    >
      <div className="overflow-hidden rounded-xl w-full">
        <img
          src={cake.image}
          alt={cake.name}
          className="rounded-xl object-cover w-full transform transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <p className="mt-2 text-sm font-medium">{cake.name}</p>
    </Link>
  ))}
</div>

    </div>
  );
};

export default OnlineCakeDelivery;
