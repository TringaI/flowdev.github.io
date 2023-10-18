import style from '../../../styles/index.module.scss'
import clsx from 'clsx';

import Image from 'next/image'
import { useState, useEffect, useLayoutEffect } from 'react';


export default function Header() {

  const [text, setText] = useState('');

  useEffect(() => {
    let headerText = 'flowdev';
    let count = 0;
    let index = 0;
    let currentTxt = '';
    let fullTxt = '';

    const typingEffect = () => {
      fullTxt = headerText;
      currentTxt = fullTxt.slice(0, ++index);
      setText(currentTxt);
      setTimeout(typingEffect, 300);
      if (currentTxt.length === fullTxt.length) {
        index = 6;
      }
    };

    typingEffect();
  }, []);

  return (
    <main id='header' className={`${style.header_container} pt-40 pb-10 md:pt-[6.5rem] md:pb-20`}>

      <div className="flex flex-col justify-center w-full items-center relative z-50 bg-transparent">
        <div className="flex flex-col md:flex-row justify-center items-center relative" style={{width: 'fit-content'}}>
          <div className='flex flex-col justify-end items-end'>
            <h1 className={`${style.header_main_heading}`}>FLOWDEV</h1>
            <h1 className={`${style.header_secondary_heading}`}>AGENCY</h1>
          </div>
          <img src="/images/logos/flowdev_logo.ico" className={` lg:w-[400px] left-0 md:ml-20 absolute top-[70px] md:relative  ${style.header_logo}`} alt="" />
        </div>
      </div>
      <img src="/images/icons/wave.gif" className={`w-[100%] md:w-[90%] md:ml-[5%] absolute top-[13rem] md:top-[8rem] ${style.wave_gif}`} alt="" />
    </main>
  )
} 