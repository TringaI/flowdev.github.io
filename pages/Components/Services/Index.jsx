import style from "../../../styles/index.module.scss";
import Image from "next/image";
import { serviceData } from "../../../src/data/services/service_data";
import { useState, useEffect } from "react";
import CardOne from "./Components/CardOne";
import CardTwo from './Components/CardTwo'
import CardThree from './Components/CardThree'
import CardFour from './Components/CardFour'

export default function Services() {


  return (
    <div id="our services" className={`w-[80%] ml-[10%] flex flex-col items-start mt-60`}>
      <div className="flex w-full justify-start items-center relative">
        <hr className="bg-white opacity-20 h-[1px] w-[100%]"/>
        <h1 className={`${style.primary_headings} ml-[5px] absolute right-0 bg-black p-[20px]`}>our services</h1>
      </div>
      <h2 className={`${style.secondary_headings}`}>what can <i><b>flowdev</b></i> team create</h2>
      <div className={`${style.services_container} w-full`}>
        <CardOne />
        <CardTwo />
        <CardThree />
        <CardFour />
      </div>
    </div>
  );
}
