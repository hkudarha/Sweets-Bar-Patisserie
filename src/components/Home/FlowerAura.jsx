import React, { useState } from 'react';

const FlowerAura = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <div className=" mx-auto px-[2rem] sm:px-[4rem] py-[2rem]">
      <h3 className="text-xl font-semibold mb-2">
        FlowerAura: Send Flowers, Cakes, Gifts & Plants Online Across India
      </h3>

      <p className="text-gray-700 ">
        At FlowerAura, we take pride in delivering the highest quality flowers, cakes, plants, and gifts to your loved ones. Our diverse range ensures there's something perfect for every occasion. From romantic roses to delightful chocolate cakes and vibrant indoor plants, we have it all. As India's most trusted gifting brand, we guarantee fresh and beautiful flowers, delicious cakes, vibrant plants, and unique gifts that bring joy and smiles. Enjoy the convenience of doorstep delivery with our safe and secure packaging, ensuring your order arrives in pristine condition. Let’s explore our collection a little better
        {!expanded && '...'}
      </p>

      {expanded && (
        <div className="text-gray-700 mt-2">
          <p className="mt-2">
            <strong>Flowers:</strong> At FlowerAura, we offer a stunning range of flower bouquets and arrangements. Choose from a variety of flowers like roses, carnations, sunflowers, orchids, and gerberas. For something special, explore our luxury flowers like Cape Cup, Taal palm, Limonium, and Eucalyptus. Our reliable flower delivery in India service ensures your flowers are handled with care and arrive fresh and beautiful. We also offer city-specific services like flower delivery in Bangalore, flower delivery in Delhi, and flower delivery in Gurgaon to bring smiles to every doorstep.
          </p>
          <p className="mt-2">
            <strong>Cakes:</strong> Our freshly baked & delicious cakes are FSSAI-certified, ensuring safety and quality. We offer a wide range of flavours, such as chocolate, black forest, red velvet, tiramisu, coffee, blueberry, and various cake types, including bomb cakes, designer cakes, theme cakes, photo cakes, pinata cakes, fruit cakes, & bento cakes. Our online cake delivery service guarantees safe and timely delivery. Whether you're craving something sweet in Bangalore, Delhi, or Gurgaon, our cake delivery service ensures happiness reaches on time.
          </p>
          <p className="mt-2">
            <strong>Plants:</strong> At FlowerAura, we understand the need of plants for home and offer an extensive range of plants to brighten your indoor spaces. Our plants are not just healthy but also come potted in beautiful planters that add a touch of elegance to any space. With FlowerAura's doorstep plants delivery same day, you can enjoy the convenience of having your plants delivered safely and swiftly.
          </p>
          <p className="mt-2">
            <strong>Gifts:</strong> Finding new and trendy gift ideas can be challenging, but we cater to that need with an amazing gift range. Our variety includes gifts under categories such as home decor, dining & serving, jewellery, showpieces, candles, spiritual gifts, soft toys, and perfumes. We also offer a wide range of heart-warming personalised gifts like mugs, cushions, wooden planks, photo frames and more, perfect for making memories last.
          </p>
        </div>
      )}

      <div className='w-full flex items-center justify-center mt-5 '>
        <p
        onClick={handleToggle}
        className='text-[#197889] underline font-semibold cursor-pointer text-center'
      >
        {expanded ? 'Read Less' : 'Read More'}
      </p>
      </div>
    </div>
  );
};

export default FlowerAura;
