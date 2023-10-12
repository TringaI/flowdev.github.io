import React from 'react'
import style from "../../../../styles/index.module.scss";
import Items from './Items';
import { useState, useEffect } from 'react';
function Cards(props) {
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
            <div className={`${style.services_content_container}  relative`} style={{left: `${windowWidth > 768 ? props.left : '0px'}`}}>
                <h1 className={`${style.services_cards_headings}`}>{props.heading}</h1>
                <Items item={props.item1}/>
                <Items item={props.item2}/>
                <Items item={props.item3}/>
            </div>
            
    
    )
}

export default Cards