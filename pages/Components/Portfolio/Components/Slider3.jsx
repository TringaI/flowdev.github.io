import { Component } from "react";
import Flicking from "@egjs/react-flicking";
import { Perspective } from "@egjs/flicking-plugins";
import style from '../../../../styles/index.module.scss'
import Image from "next/image";
import { AutoPlay } from "@egjs/flicking-plugins";
import { slider3_data } from '../../../../src/data/slider3/slider3_data'
import { useState, useEffect, useRef } from "react";

export default function Slider3() {
  const _plugins = [new Perspective({ rotate: -1, scale: 2, perspective: 600 })];

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
    <div className="w-full" ref={indexRef}>
      <Flicking circular={true} plugins={_plugins} className={`p-10  transition linear delay-0 duration-[1.5s] ${(isComponentVisible || oneTime) ? 'opacity-100' : 'opacity-0'}`} >

        {slider3_data.map((item, index) => (
          <div key={index} className={style.card_panel}

          >
            {/* <div className="flex justify-center items-center"> */}
            {/* <h1 className={style.portfolio_key_headings}>{item.name} </h1> */}
            {/* <Image className="ml-[10px]" src={`/images/portfolio/${item.logo}`} width={70} height={90} alt="" /> */}

            {/* </div> */}
            <br />
            <Image src={`/images/work/${item.project}`} width={500} height={400} alt="" className="mt-10 transition duration-150 delay-0" />
            {/* <a href="" className={style.protfolio_link}>view more</a> */}
          </div>
        ))}



      </Flicking>
    </div>

  )
}