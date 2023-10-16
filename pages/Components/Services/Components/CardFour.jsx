import React from 'react'
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
    <div ref={indexRef}   className={`flex w-full mt-10 md:mt-20  transition linear delay-0 duration-[1s]  ${(isComponentVisible || oneTime) ? `${style.after_animation}`:`${style.before_animation}` }`}>
          <Cards left="240px" heading="Social Media Menagement" item1="Social Media Posts " item2="Client Handeling" item3="Content Writer"/>
        </div>
  )
}

export default CardOne