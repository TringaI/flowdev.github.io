import style from '../../../styles/index.module.scss'
import Slider from './Components/Slider'
import Image from 'next/image'
import { useState, useEffect } from 'react'


export default function Portfolio() {

    const images = [
        '/images/work/kosCare.png',
        '/images/work/chessClub.png',
        '/images/work/xhevdet_doda.png'
    ]
    const [currentIndex, setCurrentIndex] = useState(0);
    let autoplayInterval = 5000

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((currentIndex + 1) % images.length);
        }, autoplayInterval);

        return () => {
            clearInterval(timer);
        };
    }, [currentIndex, images.length, autoplayInterval]);


    const [scrollTop, setScrollTop] = useState(false);

   
  const handleResize = () => {
    if (window.innerWidth < 1200) {
      setScrollTop(window.scrollY >= 600);
    } else {
    setScrollTop(window.scrollY >= 1000);

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
  

    
    return (
        <main id='portfolio' className={`${style.relative} ${scrollTop ? style.after_scroll : style.before_scroll}`}>

            <div className={`${style.primary_container} overflow-hidden`}>
                <h1 className={style.primary_headings}>PORTFOLIO</h1>
                <h2 className={style.secondary_headings}>our work & clients</h2>
               
                   <br />
                        <Image className={`${style.slide_show_image} ${currentIndex === 0 ? 'fade-in' : ''}`} alt='work' width={1200} height={500} src={images[currentIndex]} />
                    <br />
                    <Slider />

            

            </div>
        </main>
    )
}






