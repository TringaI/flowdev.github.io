import style from "../../../styles/index.module.scss";
import Image from "next/image";
import { useState, useEffect } from "react";

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
  const [scrollTop, setScrollTop] = useState(false);
  const [activeImage, setActiveImage] = useState()



  const handleResize = () => {
    if (window.innerWidth < 1000) {
      if(window.scrollY >= 1100){
        setScrollTop(true);
        console.log(scrollTop)
      }     
    }else{
      if(window.scrollY >= 1800){
        setScrollTop(true);
        console.log(scrollTop)
      } 
    }
  };


  useEffect(() => {
    handleResize(); // Initial setup
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleResize);


    return () => {
      window.removeEventListener("resize", handleResize);
    window.addEventListener("scroll", handleResize);

    };
  }, []);



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

  return (
    <main id='programs' className={`${style.programs_container} ${scrollTop ? style.after_scroll : style.before_scroll}`}>
      {/* Background Colors */}
      <div className={style.programs_dec}></div>
      <div className={style.programs_bottom_dec}></div>

      <div className={`${style.primary_container} ${style.body_index}`}>
        <h1 className={style.primary_headings} >
          SOURCES
        </h1>
        <h2 className={style.secondary_headings}>
          programming languages & apps we work with
        </h2>

        <div className="w-full">
          <div className="grid grid-cols-12">
          {images.map(({ filename, image }, index) => (
                <div className={`col-span-3  md:col-span-2 `} key={filename}>
                  <div
                    className={`flex w-full ${style.programs_images_container} ${style.tooltip}`}
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
