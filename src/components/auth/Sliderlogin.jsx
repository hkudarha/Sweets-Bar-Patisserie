import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination , Autoplay} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import img from "../../assets/cake/designer-cakes.jpg"

const testimonials = [
  {
    id: 1,
    image:img ,
    text: "Perfect everything was just nice.",
    name: "Tina",
  },
  {
    id: 2,
    image: img,
    text: "Amazing experience, would recommend!",
    name: "John",
  },
  {
    id: 3,
    image:img,
    text: "Loved the service and quality.",
    name: "Sarah",
  },
  {
    id: 4,
    image: img,
    text: "Delicious and beautiful!",
    name: "Mike",
  },
];

const SliderLogin = () => {
  return (
    <div className="w-full max-w-md mx-auto mt-8">
      <h3 className="text-lg font-semibold mb-4">What People Say</h3>
      <Swiper
       modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000, 
          disableOnInteraction: false,
        }}
        spaceBetween={20}
        slidesPerView={1}
         speed={800}
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="border border-gray-300 rounded p-4 flex items-center gap-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <p className="text-sm">{testimonial.text}</p>
                <p className="font-semibold mt-1">{testimonial.name}</p>
              </div>
            </div>
            <div className="mt-[2rem]"></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderLogin;
