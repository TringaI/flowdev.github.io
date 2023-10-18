import React from 'react';
import style from "../../../../styles/index.module.scss";
import Cards from "./Cards";
import { useState, useEffect, useRef } from 'react'


function CardOne() {
  const indexRef = useRef(null);
  const [isComponentVisible, setIsComponentVisible] = useState(false);

  const [oneTime, setIsOneTime] = useState(false);

  // Intersection Observer callback function
  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsComponentVisible((prevState) => {
          // Set isComponentVisible to true if it's not true already
          if (!prevState) {
            setIsOneTime(true); // Set oneTime to true
            return true;
          }
          return prevState;
        });
      } else {
        setIsComponentVisible(false);
      }
    });
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (indexRef.current) {
      observer.observe(indexRef.current);
    }

    return () => {
      if (indexRef.current) {
        observer.unobserve(indexRef.current);
      }
    };
  }, []);


  return (
    <div className={`flex w-full mt-20 relative transition linear delay-0 duration-[0.5s] z-0 ${(isComponentVisible || oneTime) ? `${style.after_animation}`:`${style.before_animation}` } ${style.lines} ${style.services_main_containers}`} ref={indexRef}  >
      <Cards heading="SOFTWARE DEVELOPMENT" item1="Dynamic Websites" item2="Simple Websites" item3="Complex Platforms" />
      <svg xmlns="http://www.w3.org/2000/svg" width="263" height="335" viewBox="0 0 263 335" fill="none" id={style.first_dec} className={`${(isComponentVisible || oneTime) ? style.drawLine:'' } ${style.lines}`}>
        <path d="M0 2C91.8463 2 147.332 2 231.986 2C248.002 2 261 14.9837 261 31V304C261 320.016 248.016 333 232 333H95.8164" stroke="url(#paint0_linear_303_9)" strokeWidth="6" />
        <defs>
          <linearGradient id="paint0_linear_303_9" x1="130.5" y1="2" x2="130.5" y2="333" gradientUnits="userSpaceOnUse">
            <stop stopColor="#7de1e8" />
            <stop offset="1" stopColor="#3e5b87" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default CardOne;
