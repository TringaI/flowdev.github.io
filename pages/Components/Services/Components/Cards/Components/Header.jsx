import style from '../../../../../../styles/index.module.scss'
import Image from 'next/image'


export default function Header(props){
    return(
        <div className="flex">
        <div className={`${style.top_dec} `} style={{backgroundImage: `radial-gradient(${props.dec_color}, #080510 80%)`}}></div>
        <div className={`flex  w-full ${style.center}`}>
            <Image className={style.services_cards_logos} src={props.image} alt='pen-tool' width={50} height={50}></Image>
            <h2 className={style.services_cards_headings}>{props.name}</h2>
        </div>
    </div>
    )
}