import style from '../../../styles/index.module.scss'
import Slider from './Components/Slider'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import Slider3 from './Components/Slider3'

export default function Portfolio() {

  return (
    <main id='portfolio' className={`relative w-[80%] ml-[10%] mt-40`}>
      <div className="flex justify-center items-center relative">
        <h1 className={`${style.primary_headings} absolute bg-black p-[10px] left-0`}>flowdev portfolio</h1>
        <hr className="bg-white opacity-20 h-[1px] w-[100%]" />
      </div>
      <div className="flex w-full justify-end">
        <h1 className={`${style.secondary_headings} `}>some of <b><i>flowdev</i></b> projects</h1>

      </div>
      <br />

      <Slider3 />

    </main>
  )
}






