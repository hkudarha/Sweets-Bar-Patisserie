import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import img1 from "../../assets/Home/anniversary-cake-homepage-fa-desktop.avif";
import img2 from "../../assets/Home/birthday-landingpage-fa-desktop.avif";
import img3 from "../../assets/Home/chocolate-cake-landingpage-fa-desktop.avif";
import img4 from "../../assets/Home/mango-cake_banner.avif";

const CakeSwiper = () => {
  const slides = [
    img1,
    img2,
    img3,
    img4,
  ];

  return (
    <div data-aos="fade-up" className="px-[2rem] sm:px-[4rem] pt-[2rem]">
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
              className="w-full h-auto  object-cover rounded-xl"
            />
            <div className='mt-[3rem]'></div>
          </SwiperSlide>
          
        ))}
      </Swiper>
    </div>
  );
};

export default CakeSwiper;
