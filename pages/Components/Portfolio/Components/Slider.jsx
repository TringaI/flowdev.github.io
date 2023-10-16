import React, { useRef, useEffect, useState } from "react";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import "@egjs/react-flicking/dist/flicking-inline.css";
import { AutoPlay } from "@egjs/flicking-plugins";
import style from '../../../../styles/index.module.scss'
import Image from "next/image";

function importAllImages(r) {
    return r.keys().map((filename) => ({
        filename: filename.replace(/^.*[\\/]/, ''), // Remove any directory path
        image: r(filename).default,
    }));
}

let images = importAllImages(
    require.context("../../../../public/images/portfolio", false, /\.(png|jpe?g|svg)$/)
);

export default function Slider() {
    const [isClient, setIsClient] = useState(false);

    const plugins = [new AutoPlay({ duration: 3000, direction: "NEXT", stopOnHover: false })];

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
            <div className="mt-40">
            {isClient && images ? (
                <Flicking
                    className='up_animation slider w-full mt-10 '
                    plugins={plugins}
                    align="prev"
                    circular={true}
                    onMoveEnd={e => {
                        console.log(e);
                    }}
                >
                    {images.map(({ filename, image }, index) => (
                        <div className={`${style.panel} pl-10 pr-10  md:pl-20 md:pr-20 `} key={index}>
                            <div className={style.image_container}>
                                <Image width={60} height={60} src={`/images/portfolio/${filename}`} className="" alt="Panel 1" />

                            </div>
                            <p className={style.slider_logo_info}>{filename
                                .replace(/^.*[\\/]/, '') // Remove directory path
                                .replace(/\.[^.]+$/, '') // Remove file extension
                                .replace(/^\w/, (c) => c.toUpperCase()) // Uppercase the first character
                            }</p>
                        </div>
                    )
                    )}
                </Flicking>
            )
                : (<p>Loading</p>)}
        </div>
    );
}
