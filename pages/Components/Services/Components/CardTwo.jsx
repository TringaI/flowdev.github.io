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
        <div ref={indexRef} className={`flex w-full mt-10 md:mt-20 relative z-0 transition linear delay-0 duration-[0.5s]  ${(isComponentVisible || oneTime) ? `${style.after_animation}`:`${style.before_animation}` }`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="276" height="312" viewBox="0 0 276 312" fill="none" id={style.second_dec} className={`${(isComponentVisible || oneTime) ? style.drawLine : ''}`}>
                <path d="M176 1.5H32C15.4315 1.5 2 14.9315 2 31.5V280C2 296.569 15.4315 310 32 310H275.5" stroke="url(#paint0_linear_357_5)" stroke-width="6" />
                <defs>
                    <linearGradient id="paint0_linear_357_5" x1="138.75" y1="1.5" x2="138.75" y2="310" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#3e5b87" />
                        <stop offset="1" stop-color="#7de1e8" />
                    </linearGradient>
                </defs>
            </svg>
            <Cards left="80px" heading="MARKETING" item1="Campaign Development" item2="Advertisements" item3="Product promovation" />

        </div>
    )
}

export default CardOne