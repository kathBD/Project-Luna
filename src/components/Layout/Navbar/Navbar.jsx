import React from 'react'
import NavCSS from './Navbar.module.css'
import {Link} from 'react-router-dom'
import Logo from '../../assets/Logo/logo.JPG'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


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
                <li></li>
            </ul>
          
            </div>
            <div>

            </div>
            <div className={NavCSS.cart}>
            <Link to ='/Cart'>
            <div className={NavCSS.container}>  
        
             <span className={NavCSS.count}></span>  
            <i className={NavCSS.icon}><ShoppingCartIcon  fontSize="large" />  </i>
           </div>
            </Link>
            </div>
     
           </div>
           
    
        </>
    )
}

export  {Navbar}


