import React, { useState } from 'react';
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

    return (
        <div
            className={`${style.services_content_container} ${isMouseOver ? `${style.afterHover}` :`${style.beforeHover}`} relative z-40`}
            style={{ left: `${window.innerWidth > 768 ? props.left : '0px' }`}}
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
