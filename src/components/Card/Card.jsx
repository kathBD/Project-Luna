import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Link } from 'react-router-dom';
import SimpleSelect from '../SimpleSelect/SimpleSelect';




const useStyles = makeStyles({
    root: {
      maxWidth: 350,
    },
    cart:{
        marginLeft: '300px',
        
      
    },
});

  export default function ImgMediaCard() {
    const classes = useStyles();
    


  return (
    <Card className={classes.root}>
        <CardMedia
          component="img"
          alt="Kebab"
          height="140"
          image="https://i.ibb.co/z4VCSZ8/kebab.jpg"
          title="Shawarma"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Shawarma de carne
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          "Pan árabe","Carne de Res", "Lechuga","Tomate",  "salsa tzatziki(yogurt)",
           "Humus"
          </Typography>
          <Typography color='textSeconday' variant="h6" align="right" className={classes.price}>
            <AttachMoneyIcon aria-label="Precio"/>
            {15000}
            </Typography>
        </CardContent>
        <CardActionArea >
          <SimpleSelect/> 
   
          <IconButton className={classes.cart} aria-label="Cart">
          <Link to='/cart'>
          <AddShoppingCartIcon aria-label="Agregar a carrito"/>
          </Link>
          </IconButton>
       
      

        
        </CardActionArea>

      
    
    </Card>
  );
}




