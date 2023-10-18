import React, { useState, useEffect } from 'react';
import style from "../../../../styles/index.module.scss";
import Items from './Items';

function Cards(props) {
    const [isMouseOver, setIsMouseOver] = useState(false);

    // Function to handle mouse enter
    const handleMouseEnter = () => {
        setIsMouseOver(true);
    }

    // Function to handle mouse leave
    const handleMouseLeave = () => {
        setIsMouseOver(false);
    }
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
      // Update window width when the component is mounted
      setWindowWidth(window.innerWidth);
  
      // Add an event listener to update window width when the window is resized
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
  
      window.addEventListener('resize', handleResize);
  
      // Remove the event listener when the component is unmounted
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
    return (
        <div
            className={`${style.services_content_container} ${isMouseOver ? `${style.afterHover}` :`${style.beforeHover}`} relative z-40`}
            style={{left: `${windowWidth > 768 ? props.left : '0px'}`}}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
              <h1 className={`${style.services_cards_headings}`}>{props.heading}</h1>
                <Items item={props.item1}/>
                <Items item={props.item2}/>
                <Items item={props.item3}/>
        </div>
    );
}

export default Cards;
