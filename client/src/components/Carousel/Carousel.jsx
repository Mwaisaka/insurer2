import { useState } from "react";
import { useEffect, useRef } from 'react';

import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

export default function Carousel({ slides }) {
  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };


  const imgRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
        if (imgRef.current) {
            const scrollPosition = window.pageYOffset;
            const maxScrollPosition = window.innerHeight - imgRef.current.offsetHeight;
            const scrollPercentage = scrollPosition / maxScrollPosition;
            const scaleFactor = 1 - (scrollPercentage * 0.8);
            imgRef.current.style.transform = `scale(${scaleFactor})`;
          }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="overflow-hidden relative">
      <div
        className={`flex transition ease-out duration-40`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((s, i) => {
          return (
            <div key={i} className="relative w-full flex-none">
              <img src={s.image} className="w-full" />
              <div className="absolute bottom-10 left-0 transform translate-x-10 translate-y-[-20] w-90 h-85 bg-white-500 flex items-center justify-center opacity-80 rounded-lg shadow-lg p-5">
              <span className="text-2xl font-semibold text-white sm:text-xl dark:text-white-800 text-center">
                {s.content}
                <div className="button-group">
       
      </div>
              </span>
              </div>

            </div>
          );
        })}
      </div>
      
      <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl">
        <button onClick={previousSlide}>
          <BsFillArrowLeftCircleFill />
        </button>
        <button onClick={nextSlide}>
          <BsFillArrowRightCircleFill />
        </button>
      </div>

      <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
        {slides.map((s, i) => {
          return (
            <div
              onClick={() => {
                setCurrent(i);
              }}
              key={"circle" + i}
              className={`rounded-full w-5 h-5 cursor-pointer  ${
                i == current ? "bg-white" : "bg-gray-500"
              }`}
            ></div>
          );
        })}
      </div>
      
    </div>
  );
}
