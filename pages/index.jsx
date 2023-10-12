import Image from 'next/image'
import { Inter } from 'next/font/google'
import style from '../styles/index.module.scss'
import Header from './Components/Header/Index'
import Navigation from './Components/Navigation/Index'
import Services from './Components/Services/Index'
import Portfolio from './Components/Portfolio/Index'
import Programs from './Components/Programs/Index'
import Contact from './Components/Contact/Index'
import Footer from './Components/Footer/Index'
import Slider from './Components/Portfolio/Components/Slider'

export default function Home() {
  return (
    <main>
      <title>FlowDev Agency</title>
      {/* <Navigation/> */}
      <Header />
      <Services />
      <br className={style.none} /><br className={style.none} /><br className={style.none} />
      <Portfolio />
      <Programs />
      <Contact />
      <Slider/>
      <Footer />
    </main>
  )
}
