import React from 'react'

import NavCSS from './Navbar.module.css'
import {Link} from 'react-router-dom'
import Logo from '../../assets/Logo/logo.JPG'
import Cart from '../../Cart/Cart'


const Navbar = () => {
    

    return (
        <>
   
       
            <div className={NavCSS.nav}>
                <div >
                <Link to ='/Hero' className={NavCSS.logo} >
                 <img src={Logo} width="120px" alt="logo" />
                </Link>
                </div>  
            <div className={NavCSS.navmenu}>
            <ul>
                <li>
                    <Link to='/' className={NavCSS.navlinks} >
                    Home
                    </Link>
                </li>
                <li className={NavCSS.navmenu}>
                    <Link to='/Shawarma' className={NavCSS.navlinks} >
                    Shawarma
                    </Link>
                </li>
                <li className={NavCSS.navmenu}>
                    <Link to='/Combos' className={NavCSS.navlinks} >
                   Combos
                    </Link>
                </li>
                <li className={NavCSS.navmenu}>
                    <Link to='/Entradas' className={NavCSS.navlinks} >
                   Entradas
                    </Link>
                </li>
                <li className={NavCSS.navmenu}>
                    <Link to='/Bebidas' className={NavCSS.navlinks} >
                   Bebidas
                    </Link>
                </li>
            </ul>
          
            </div>
            <div className={NavCSS.cart}>
            <Link to ='/Cart'>
                <Cart/>
            </Link>
            </div>
     
           </div>
           
    
        </>
    )
}

export  {Navbar}


