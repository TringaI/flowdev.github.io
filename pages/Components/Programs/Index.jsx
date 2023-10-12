import style from "../../../styles/index.module.scss";
import Image from "next/image";
import { useState, useEffect, useRef  } from "react";

function importAllImages(r) {
  return r.keys().map((filename) => ({
    filename,
    image: r(filename).default,
  }));
}

let images = importAllImages(
  require.context("../../../public/images/apps", false, /\.(png|jpe?g|svg)$/)
);

images = images.slice(0, Math.round(images.length / 2));





export default function Programs() {
  const [activeImage, setActiveImage] = useState()






  // on click active images 
  const handleClick = (index) => {
    if (window.innerWidth < 1000) {
      setActiveImage(index);

    }
  };

  //hover active images
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = (index) => {
     
      setActiveImage(index);
    
  };

  const handleMouseLeave = () => {
 
      setActiveImage(null);
    
  };

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
    <main id='programs' className={`${style.programs_container} mt-0`}>
      {/* Background Colors */}
      <div className={style.programs_dec}></div>
      <div className={style.programs_bottom_dec}></div>

      <div className={`${style.primary_container} ${style.body_index}`}>
      <div className="flex w-full justify-start items-center relative">
        <hr className="bg-white opacity-20 h-[1px] w-[100%]"/>
        <h1 className={`${style.primary_headings} ml-[5px] absolute right-0 bg-black p-[20px]`}>sources</h1>
      </div>
        <h2 className={style.secondary_headings}>
          programming languages we <b>mainly</b> work with
        </h2>

        <div className={`w-full transition linear delay-0 duration-[1.5s] ${(isComponentVisible || oneTime) ? 'opacity-100' : 'opacity-0'}`} ref={indexRef}>
          <div className="grid grid-cols-12">
          {images.map(({ filename, image }, index) => (
                <div className={`col-span-3  md:col-span-2 `} key={filename}>
                  <div
                    className={`flex w-full flex-col ${style.programs_images_container} ${style.tooltip}`}
                  >
                    <Image
                      className={`${style.programs_images}`}
                      src={image}
                      alt="programs"
                      width={70}
                      height={70}
                      onClick={() => handleClick(index)}
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}
                      style={{
                        filter: activeImage === index ? "grayscale(0%)" : "grayscale(100%)",
                        opacity: activeImage === index ? 1 : 0.5,
                      
                        
                      }}
                    />
                    <p className="text-white mt-[10px]">{
                        filename
                          .replace(/^\.\/(.*?)\.png$/, "$1") // me e hek ./ edhe .png prej file name. se perndryshe aty e qet p.sh. ./python.png
                          .replace(/^\w/, (c) => c.toUpperCase()) // kjo e bon qe shkronja e par mu kon uppercase
                      }</p>
                    <span className={`${style.tooltiptext}`}>
                      {
                        filename
                          .replace(/^\.\/(.*?)\.png$/, "$1") // me e hek ./ edhe .png prej file name. se perndryshe aty e qet p.sh. ./python.png
                          .replace(/^\w/, (c) => c.toUpperCase()) // kjo e bon qe shkronja e par mu kon uppercase
                      }
                    </span>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
