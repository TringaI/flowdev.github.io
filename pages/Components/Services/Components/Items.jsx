import React from 'react'
import style from "../../../../styles/index.module.scss";

function Items(props) {
  return (
    <div className="flex w-full mt-[20px] items-center">
    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="19" viewBox="0 0 13 19" fill="none">
        <path d="M2 1L10 10.1429L2 17" stroke="url(#paint0_linear_303_17)" strokeWidth="3" />
        <defs>
            <linearGradient id="paint0_linear_303_17" x1="6" y1="1" x2="6" y2="17" gradientUnits="userSpaceOnUse">
                <stop stopColor="#60B9BF" />
                <stop offset="1" stopColor="#1066E7" />
            </linearGradient>
        </defs>
    </svg>

    <p className={`${style.services_cards_p} pl-5 h-full`}>{props.item}</p>
</div>
  )
}

export default Items