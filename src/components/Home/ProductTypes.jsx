import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/Home/cake_desktop_0.avif";
import img2 from "../../assets/Home/gift_desktop_new.avif";
import img3 from "../../assets/Home/floral-delights-desktop.avif";
import img4 from "../../assets/Home/plant_desktop_0.avif";

import banner from "../../assets/Home/refer-and-earn-desktop.avif";

const productData = [
  {
    image: img1,
    heading: "Delicious Cakes",
    links: [
      { name: "Birthday Cakes", path: "/cakes/birthday" },
      { name: "Anniversary Cakes", path: "/cakes/anniversary" },
      { name: "Designer Cakes", path: "/cakes/designer" },
      { name: "Photo Cakes", path: "/cakes/photo" },
      { name: "Chocolate Cakes", path: "/cakes/chocolate" },
    ],
  },
  {
    image: img2,
    heading: "Gifting Gallery",
    links: [
      { name: "Photo Gifts", path: "/gifts/photo" },
      { name: "Mugs", path: "/gifts/mugs" },
      { name: "Cushions", path: "/gifts/cushions" },
      { name: "Name Gifts", path: "/gifts/name" },
      { name: "Caricatures", path: "/gifts/caricatures" },
    ],
  },
  {
    image: img3,
    heading: "Floral Delights",
    links: [
      { name: "Red Roses", path: "/flowers/red-roses" },
      { name: "Birthday Flowers", path: "/flowers/birthday" },
      { name: "Anniversary Flowers", path: "/flowers/anniversary" },
      { name: "Exotic Flowers", path: "/flowers/exotic" },
      { name: "Flower Boxes", path: "/flowers/boxes" },
    ],
  },
  {
    image: img4,
    heading: "Plant Paradise",
    links: [
      { name: "Bonsai", path: "/plants/bonsai" },
      { name: "Indoor", path: "/plants/indoor" },
      { name: "Air Purifying", path: "/plants/air-purifying" },
      { name: "Lucky Bamboo", path: "/plants/lucky-bamboo" },
      { name: "Flowering", path: "/plants/flowering" },
    ],
  },
];

const ProductTypes = () => {
  return (
    <div className="px-[2rem] sm:px-[4rem] py-6">
      <div className="bg-[#e7edef] sm:p-[4rem] p-[1rem] rounded-2xl grid grid-cols-1 gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {productData.slice(0, 2).map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-300 rounded-xl flex flex-nowrap overflow-hidden shadow-sm"
            >
              <div className="w-1/2 min-w-[50%]">
                <img
                  src={item.image}
                  alt={item.heading}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-1/2 min-w-[50%] flex flex-col justify-center p-4 sm:p-6">
                <h3 className="text-lg font-bold mb-2 text-gray-800">
                  {item.heading}
                </h3>
                <ul>
                  {item.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <Link
                        to={link.path}
                        className="text-gray-600 hover:text-[#63a8c0] text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {productData.slice(2).map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-300 rounded-xl flex flex-nowrap overflow-hidden shadow-sm"
            >
              <div className="w-1/2 min-w-[50%] p-4 sm:p-6 flex flex-col justify-center">
                <h3 className="text-lg font-bold mb-2 text-gray-800">
                  {item.heading}
                </h3>
                <ul>
                  {item.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <Link
                        to={link.path}
                        className="text-gray-600 hover:text-[#63a8c0] text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-1/2 min-w-[50%]">
                <img
                  src={item.image}
                  alt={item.heading}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 rounded-2xl overflow-hidden">
        <img src={banner} alt="Refer and Earn Banner" />
      </div>
    </div>
  );
};

export default ProductTypes;
