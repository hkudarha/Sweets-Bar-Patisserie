import React from 'react'
import img1 from "../../assets/Home/Cover-Desktop_7.avif"
import img2 from "../../assets/Home/D.avif"
import img3 from "../../assets/Home/how-international-flower-delivery-works-cover-D.avif"

const RelatedBlog = () => {
  const blogs = [
    {
      image: img1,
      title: "The Pollination of Art: From Vase to Canvas",
      desc: "Flowers have been whispering secrets to artists for centuries. Sometimes, they bloom boldly in golden yellows like Van Gogh’s Sunflowers; other times, they wilt with drama-like characters in a Shakespearean",
      link: "#"
    },
    {
      image: img2,
      title: "How to Choose the Best Flower Shop Delivery Service Near You",
      desc: "Did you know that 75% of people say receiving flowers instantly improves their mood? Flowers have the power to brighten anyone’s day, turning ordinary moments into cherished memories. But for",
      link: "#"
    },
    {
      image: img3,
      title: "Sending Blooms Across Borders: How International Flower Delivery Works",
      desc: "Flowers have always been a meaningful token, whether to celebrate a milestone, offer sympathy, or simply express love. Over time, gifting blooms has become a common way to show you",
      link: "#"
    }
  ];

  return (
    <div data-aos="fade-up" className='px-[2rem] sm:px-[4rem] py-8'>
      <h2 className='text-2xl font-bold mb-6'>Related Blog</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {blogs.map((blog, index) => (
          <div key={index} className='flex flex-col'>
            <img src={blog.image} alt={blog.title} className='rounded-md w-full h-56 object-cover' />
            <h3 className='text-lg font-semibold mt-4'>{blog.title}</h3>
            <p className='text-gray-700 text-sm mt-2'>{blog.desc}</p>
            <a href={blog.link} className='text-sky-600 text-sm mt-2 hover:underline'>Read More...</a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RelatedBlog
