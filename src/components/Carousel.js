import React, { useState, useEffect } from "react";
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill,} from "react-icons/bs";

const Carousel = ({ children }) => {
  const [current, setCurrent] = useState(0);
  const slides = React.Children.toArray(children);

  useEffect(() => {
    const nextSlide = () => {
        setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }
    const timer = setInterval(() => {
      nextSlide();
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
    <div className="min-h-[600px] overflow-hidden relative h-home">
      <div className="flex transition ease-out duration-40" style={{ transform: `translateX(-${current * 100}%)`,}} >
        {slides.map((slide, index) => (
          <div className="h-full w-full flex-shrink-0" key={index}>
            {slide}
          </div>
        ))}
      </div>

      <div className="top-0 md:h-home h-full w-full justify-between items-center flex text-white px-10 text-3xl absolute z-9 pointer-events-none">
        <button onClick={previousSlide} className="pointer-events-auto">
          <BsFillArrowLeftCircleFill className="text-gray-500" />
        </button>
        <button onClick={nextSlide} className="pointer-events-auto">
          <BsFillArrowRightCircleFill className="text-gray-500" />
        </button>
      </div>

      {/* <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
        {slides.map((_, index) => (
          <div
            onClick={() => setCurrent(index)}
            key={`circle-${index}`}
            className={`rounded-full w-10 h-2 cursor-pointer ${
              index === current ? "bg-white" : "bg-gray-500"
            }`}
          ></div>
        ))}
      </div> */}
    </div>
  );
};

export default Carousel;
