import style from "../../../styles/index.module.scss";
import Image from "next/image";
import { serviceData } from "../../../src/data/services/service_data";
import { useState, useEffect } from "react";
import CardOne from "./Components/CardOne";
import CardTwo from './Components/CardTwo'
import CardThree from './Components/CardThree'
import CardFour from './Components/CardFour'
import Grainy from "../Grainy";

export default function Services() {


  return (

    <div className={`${style.services_main_container} justify-center items-center relative flex `}>
      <img src="/images/logos/flowdev_logo.ico" className="absolute opacity-10 w-[55%] h-auto" style={{margin: 'auto'}} alt="" />
      <div id="our services relative" className={`w-[80%] flex flex-col items-start mt-60 `}>
        {/* <h1 className={style.primary_big_headings}>WHAT CAN WE DO</h1> */}

        <div className="flex w-full justify-start items-center relative">
          <hr className="bg-white opacity-20 h-[1px] w-[100%]" />
          <h1 className={`${style.primary_headings} ml-[5px] top-[-60px] absolute right-0  p-[20px]`}>our services</h1>
        </div>
        <h2 className={`${style.secondary_headings}`}>what can <i><b>flowdev</b></i> team create</h2>
        <div className={`${style.services_container} w-full z-40`}>
          <CardOne />
          <CardTwo />
          <CardThree />
          <CardFour />

        </div>
      </div>
    </div>

  );
}
