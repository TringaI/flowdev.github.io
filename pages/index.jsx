import Image from 'next/image'
import { Inter } from 'next/font/google'
import style from '../styles/index.module.scss'
import Header from './Components/Header/Index'
import Navigation from './Components/Navigation/Index'
import Services from './Components/Services/Index'
import Portfolio from './Components/Portfolio/Index'
import Programs from './Components/Programs/Index'
import Contact from './Components/Contact/Index'



export default function Home() {
  return (
    <main>
      <link rel='favicon' sizes='any' href='/images/logos/flowdev_logo.png'></link>
        <Navigation/>
        <Header/>
        <Services/>
        <br className={style.none} /><br className={style.none}/><br className={style.none} />
        <br /><br /><br />
        <Portfolio/>
        <br /><br /><br />
        <br /><br /><br />
        <Programs/>
        <br /><br /><br />
        <br /><br /><br />
        <br /><br /><br />  
        <Contact/>
        <br/>
    </main>
  )
}
