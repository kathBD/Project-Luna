import React from "react";
import Logo from "../assets/Logo/logo.JPG";
import CartCss from "./Cart.module.css";
import { Link } from "react-router-dom";
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import { Grid, Typography } from "@material-ui/core";



const Cart = ({category, price, title, image, Description, id, CartItems}) => {
  


      
        
   
  return (
    <>
      <nav className={CartCss.nav}>
        <div>
          <div>
            <Link to="/" className={CartCss.logo}>
              <img src={Logo} width="120px" alt="logo" />
            </Link>
          </div>
        </div>
      </nav>
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography align='center' gutterBottom variant='h4'>
          Tú Carrito
        </Typography>
        <Grid item xs={8} sm={4} container spacing={2}>
   
        <Typography variant="h5" gutterBottom>
           {title}
         </Typography>
      
        </Grid>
      </Grid>



    </Grid>
    
      <button>
      <i>  <RemoveCircleIcon/></i>
      </button>
    </>
  );
};

export default Cart;
