import React from 'react'
import { FaSmile, FaMapMarkerAlt, FaTruck, FaUsers } from "react-icons/fa";


const About = () => {

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

  return (
    <div className='px-[2rem] sm:px-[4rem] py-8'>
      <div className='space-y-4'>
        <h2>#RedefiningGifting</h2>
        <p>In a fast-paced world where meaningful moments with loved ones
          can slip through our fingers and the demands of daily life often obscure the
          things that truly matter, Sweets Bar Patisserie  is your partner in nurturing genuine human
          connections that you dearly crave. For 13 wonderful years, we've not only added
          extra sparkle to numerous celebrations but have also touched many souls and treasured
          countless relationships. Our journey has always walked hand in hand with your evolving
          needs and changing tastes. And every gift within our collection, whether it be a
          delectable cake, bouquet, or a personalised keepsake, has carried a story
          of love, gratitude, and affection.</p>

        <p>Now, we renew our vows by breathing new life into Sweets Bar Patisserie , infusing it with
          a modern touch—one that champions luxury, aesthetics, and the deepest emotions—to
          align with the ever-shifting realm of gifting. Yet, at its core, the heart of
          Sweets Bar Patisserie  remains the same, unwavering in its commitment. After all, we don't just deliver
          gifts; we facilitate the expression of your feelings and the forging of deep ties with those you cherish.
          This promise has been our guiding light for years, and now, with the dawn of a redefined Sweets Bar Patisserie ,
          it shines with even more warmth to help you keep that flame of love blazing!
        </p>

        <h3 className='font-bold text-gray-700 text-[0.9rem]'> Address - Shop NO.- 5 and 6, Plot no.130, Birla Mandir Rd, Near Malviya Complex, Roshanpura, Malviya Nagar, Bhopal, Madhya Pradesh 462003</h3>
      </div>

      <section className="py-8 px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">
          Sweets Bar Patisserie , when words are not enough
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
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
      </section>
    </div>
  )
}

export default About;