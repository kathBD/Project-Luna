import React from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CartCSS from './Cart.module.css';



const Cart = () => {
    return (
        <div className={CartCSS.container}>
             <span className={CartCSS.count}>3</span>
            <i className={CartCSS.icon}><ShoppingCartIcon fontSize="large"/ ></i>
           
                   
        </div>
    )
}

export default Cart
