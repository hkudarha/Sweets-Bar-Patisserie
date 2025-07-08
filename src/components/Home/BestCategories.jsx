import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/cake/birthday_cake.jpg";

const categories = [
  { name: "Mango Cake", img: img1, link: "/cakes/mango" },
  { name: "Blueberry Cake", img: img1, link: "/cakes/blueberry" },
  { name: "Pineapple Cake", img: img1, link: "/cakes/pineapple" },
  { name: "Vanilla Cake", img: img1, link: "/cakes/vanilla" },
  { name: "Black Forest Cake", img: img1, link: "/cakes/black-forest" },
  { name: "Strawberry Cake", img: img1, link: "/cakes/strawberry" },
];

const BestCategories = () => {
  return (
    <div className="py-8 px-4 sm:px-6 md:px-8">
      <div className="text-center mb-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-800">
          Browse Through Our Best Categories
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-[2rem] justify-items-center">
        {categories.map((cat) => (
          <Link
            key={cat.name}
            to={cat.link}
            className=" text-center hover:scale-105 transition"
          >
            <img
              src={cat.img}
              alt={cat.name}
              className="rounded-xl w-full  object-cover shadow-sm"
            />
            <p className="mt-2 text-xs sm:text-sm md:text-base font-medium text-slate-800">
              {cat.name}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BestCategories;
