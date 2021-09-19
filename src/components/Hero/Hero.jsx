import React from 'react'
import HeroCSS from './HeroCss.module.css'
import Logo from '../assets/Logo/logo.JPG'
import video from '../assets/videos/LunadeBeirut.mp4'
import { Link } from 'react-router-dom'


const Hero = () => {
    return (
        <>
        <nav className={HeroCSS.nav}>
            <div>

            <div >
                <Link to ='/' className={ HeroCSS.logo}>
                 <img src={Logo} width="120px" alt="logo" />
                </Link>
                </div>  
         
            </div>  
        </nav>
        <section>
            <div className={ HeroCSS.container}>
            <video src={video} autoPlay loop muted/>
                <div className={ HeroCSS.info}>
                    <div className={ HeroCSS.text}>
                    <p className={ HeroCSS.p}>
                    ELIGE, LO MEJOR DE LA COCINA 
                    LIBANESA Y RECIBE TU PEDIDO 
                    SIN MOVERTE DE TU CASA
                    </p>
                    </div>
                    <div className={ HeroCSS.getstart}/>
                    <Link to ='/'>
                    <button  className={ HeroCSS.btn}>
                        <span>EMPEZAR</span>
                    </button>
                    </Link>
                    <div/>
                      
                </div>

            </div>
            
        </section>
      
        </>
    )
}

export default Hero
