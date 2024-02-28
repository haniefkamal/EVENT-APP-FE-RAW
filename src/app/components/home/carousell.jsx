"use client";
// import Image from "next/image";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

function CarousellHome() {
  const slides = [
    {
      url: "https://loket-production-sg.s3.ap-southeast-1.amazonaws.com/images/ss/1707981471_YIbNBN.jpg",
    },
    {
      url: "https://loket-production-sg.s3.ap-southeast-1.amazonaws.com/images/ss/1708329972_MwKUwC.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 10000);
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  const previousSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <>
      {/* ORI SCREEN: */}
      <div className="section_carousell home-section-container ">
        <div className="section-wrapper">
          <div className="w-full h-full bg-cover duration-1000">
            <img
              src={slides[currentIndex].url}
              alt={`slide-${currentIndex}`}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          {/* Arrow */}
          <div className="absolute inset-0 flex items-center justify-between p-4">
            <button
              className="p-0.5 rounded-full text-white/80 hover:bg-white/20"
              onClick={previousSlide}
            >
              <ChevronLeft size={45} />
            </button>
            <button
              className="p-0.5 rounded-full text-white/80 hover:bg-white/20"
              onClick={nextSlide}
            >
              <ChevronRight size={45} />
            </button>
          </div>
          {/* end */}

          {/* Dots */}
          <div className="absolute bottom-0 flex justify-center gap-3 w-full mb-4">
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className={`rounded-full w-3 h-3 cursor-pointer ${
                  slideIndex === currentIndex ? "bg-white/80" : "bg-gray-500/40"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
      {/* end carousell*/}
    </>
  );
}

export default CarousellHome;
