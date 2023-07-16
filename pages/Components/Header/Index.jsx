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
        <main id='header'>
            <div className={`${style.header_container} ${style.relative} ${style.ow_hidden} w-full`}>
                <div className={`grid grid-cols-12 w-full ${style.h_full} ${style.primary_container}`}>
                    <div className='col-span-10'>
                        <div className={`justify-center ${style.flex_column} ${style.h_full}`}>
                            <h1 className={style.header_heading}>
                                {text}
                            </h1>
                            <h2 className={style.header_secondary_heading}>
                                unleashing digital brilliance
                            </h2>
                        </div>

                    </div>
                    <div className={`col-span-2 justify-center ${style.flex_column} ${style.h_full}`} >
                        <Image src="/images/icons/paths.png" alt="paths" height={1500} width={1300}  className={style.path_image} />

                    </div>
                </div>
            </div>

        </main>
    )
}