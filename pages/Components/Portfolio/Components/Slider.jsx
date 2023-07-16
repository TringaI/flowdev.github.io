import style from '../../../../styles/index.module.scss'
import Image from 'next/image';
import { useState } from 'react';

export default function Slider(props) {

    const images = [
        'fk2.png',
        'logo.png',
        'toca.png',
        'kosCare_mainLogo.png',
        'codin_club_logoo.png'
    ]




    
    return (
        <div  className=" flex items-center  h-[150px]  justify-center" >
        {/* 1. */}
        <div  className="w-[200%]    relative">
          {/* 2. */}
          <div style={{height:'100%', }} className={`w-[200%] flex items-center  justify-around absolute left-0 ${style.animate}`}>
            {/* 3 */}
            {images.map((i) => {
              return (
                <div key={i} className={`flex justify-center items-center w-[50rem] h-full `} >
                 <div style={{ width:'85%', }} className={`flex justify-center items-center ${style.slider_images_container}`}>
                         <Image className={style.slider_images} width={90} height={90} src={`/images/portfolio/${i}`} alt='' />
                    </div>
                </div>
              );
            })}
            {images.map((i) => {
              return (
                <div key={i} className={`flex justify-center items-center w-[50rem] h-full `} >
                    <div style={{ width:'85%',}} className={`flex justify-center items-center ${style.slider_images_container}`}>
                         <Image className={style.slider_images} width={90} height={90} src={`/images/portfolio/${i}`} alt='' />
                    </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }