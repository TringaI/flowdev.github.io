import style from '../../../styles/index.module.scss'
import Slider from './Components/Slider'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'


export default function Portfolio() {
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
   <div className={`flex mt-40  flex-col w-full transition duration-0.5s delay-0 linear ${style.portfolio_main_container} `} >
     <div className={`flex flex-col justify-center items-center  `}>
      <main id='portfolio' className={`relative w-[80%]  mt-40`}>

        <h1 ref={indexRef} className={`${style.portfolio_heading} transition duration-[0.5s] delay-0 linear ${(isComponentVisible || oneTime) ? `${style.after_scroll}`:`${style.before_scroll}` }`}>
              WE CREATE UNIQUE AND FULLY RESPONSIVE UI/UX AND SOFTWARE DEVELOPMENT
            </h1>
        <div className={`flex relative`}>

          <div className={`w-[50%] ${style.portfolio_images_container} flex flex-col justify-center items-center`}>
            <Image src='/images/work/letiArtMobile.png' className={`relative left-[-100px] opacity-40 `} width={400} height={350} alt='' />
            <Image src='/images/work/miketMobileP.png' className={``} width={400} height={350} alt='' />
            <Image src='/images/work/tieduMobile.png' className={`relative left-[-100px] opacity-40 `} width={400} height={350} alt='' />

          </div>
     
        </div>


      </main>
    </div>
    <Slider/>
   </div>
  )
}






