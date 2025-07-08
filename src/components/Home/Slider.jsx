import React from 'react'
import img1 from "../../assets/Home/paytm-homepage-fa-desktop_3.avif"
import img2 from "../../assets/Home/Cred_banner_D.jpg"
import img3 from "../../assets/Home/jupitermoney_banner_d_0.avif"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Slider = () => {

    const slides = [
        img1,
        img2,
        img3,
      ];

  return (
    <div data-aos="fade-up" className="px-[2rem] sm:px-[4rem] py-6">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            slidesPerView={1}
            spaceBetween={20}
            className="rounded-xl overflow-hidden"
          >
            {slides.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image}
                  alt={`Cake Banner ${index + 1}`}
                  className="w-full sm:h-auto h-[7rem] object-cover rounded-xl"
                />
                <div className='mt-[3rem]'></div>
              </SwiperSlide>
              
            ))}
          </Swiper>
        </div>
  )
}

export default Slider