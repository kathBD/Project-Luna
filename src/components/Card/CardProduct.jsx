import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import CardCss from './CardProduct.module.css'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import AddCircleIcon from '@material-ui/icons/AddCircle';



const CardProduct = ({category, price, title, image, Description, id}) => {

 

    

    return (
        <div className={CardCss.container}>
            <Card className={CardCss.card}>
                <div className={CardCss.imgcontainer} >
                <img src={image} alt="" width="380" height="300" />
            
                </div>
                <div className={CardCss.content}>
                    <CardContent 
                    
                    category={category}
                    key={id}
                    >
                        <Typography variant="h5" gutterBottom>
                            {title}
                        </Typography>
                        <Typography variant='body2' color='textSecondary' component='p'>
                            {Description}
                
                        </Typography>
                        <div className={CardCss.productprice}>
                        <Typography variant="h5" gutterBottom>
                            {price}
                        </Typography>
                        </div>
                 </CardContent>
                 <CardActions disableSpacing />
                    <div className={CardCss.actionicons}>
                         
                        <div className={CardCss.actioncart} >
                        <IconButton    aria-label="remove" >
                        <i>< AddCircleIcon className={CardCss.iconCart}/></i>
                        </IconButton>
                        </div>
                        <div>
                        <Typography variant="h6" gutterBotton>
                            {0}
                        </Typography>
                        </div>
                        <div>
                            <IconButton aria-label="add">
                            <i>  <RemoveCircleIcon className={CardCss.iconCart}  /></i>
                            </IconButton>
                        </div>
                        <div className={CardCss.cart}>
                            <IconButton  aria-label="add to cart" >
                               <i className={CardCss.iconCart}> <AddShoppingCartIcon/></i>
                            </IconButton>
                        </div>
                    </div>
                    <CardActions />
                  
        </div>
                  </Card>
        </div>
    )
}

export  {CardProduct}


