import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const testimonials = [
  {
    name: "Maria Silva",
    text: "A ONG Keralty transformou a vida do meu avô. O carinho e a dedicação dos voluntários fizeram toda a diferença!",
  },
  {
    name: "Carlos Oliveira",
    text: "Participar como voluntário foi uma experiência incrível. Pude ver sorrisos genuínos e levar alegria para muitas pessoas.",
  },
  {
    name: "Ana Souza",
    text: "O trabalho da Keralty é inspirador. Saber que existem pessoas dedicadas ao bem-estar dos outros me dá esperança.",
  },
];

function Testimonials() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="bg-white py-16 px-5 text-center">
      <h2 className="text-4xl font-bold text-primary mb-10" data-aos="fade-up" data-aos-duration="1000">
        Depoimentos
      </h2>
      
      <div className="hidden lg:flex justify-center gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-gray-100 p-6 rounded-lg shadow-lg w-1/3"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <p className="text-lg text-gray-700 italic">"{testimonial.text}"</p>
            <h4 className="text-xl font-semibold text-primary mt-4">- {testimonial.name}</h4>
          </div>
        ))}
      </div>
      
      {/* Carrossel para mobile */}
      <div className="lg:hidden">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          className="w-full max-w-md"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg mx-5">
                <p className="text-lg text-gray-700 italic">"{testimonial.text}"</p>
                <h4 className="text-xl font-semibold text-primary mt-4">- {testimonial.name}</h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Testimonials;