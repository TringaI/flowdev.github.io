import style from '../../../../../styles/index.module.scss'
import Image from 'next/image'
import Header from './Components/Header'


export default function Cards(props){
    return(
        <main className={`${style.services_cards_container} ${style.ow_hidden} ${style.relative} ${style.m_auto}`}>
            <div className={`${style.flex_column}  ${style.auto} ${style.services_cards_inner_container}` }>
                {/* top gradient and header of card */}
                    <Header image={props.image} dec_color={props.dec_color} name={props.name}/>
                <br/>
                {/* card body content */}
                {/* <div className={`${style.services_cards_body_container}`}>   
                    <ul className={`${style.flex_column} ${style.services_card_list}`}>
                    {props.data.map((item) =>(
                        <li className={`${style.services_list_item}`} key={item}>
                            {item}
                        </li>
                    ))}
                        
                    </ul>
                </div> */}

                <div className={`${style.bottom_dec}`} style={{backgroundImage: `radial-gradient(${props.dec_color}, #080510 80%)`}}></div>
                {/* <Image src={props.image} alt="dec" width={200} height={200} style={{left: `${props.left}%`, top: `${props.top}%` }} className={style.abs_images}/> */}
            </div>
        </main>
    )
}