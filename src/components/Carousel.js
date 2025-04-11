import React, { useState, useEffect } from "react";
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs";

const Carousel = ({ children }) => {
  const [current, setCurrent] = useState(0);
  const slides = React.Children.toArray(children);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(timer);
  }, [current, slides.length]);

  const previousSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full overflow-hidden min-h-[600px]">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div className="w-full flex-shrink-0" key={index}>
            {slide}
          </div>
        ))}
      </div>

      <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-between items-center px-4 text-3xl z-10 pointer-events-none">
        <button onClick={previousSlide} className="pointer-events-auto text-gray-500">
          <BsFillArrowLeftCircleFill />
        </button>
        <button onClick={nextSlide} className="pointer-events-auto text-gray-500">
          <BsFillArrowRightCircleFill />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
