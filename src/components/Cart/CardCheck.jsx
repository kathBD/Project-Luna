 import React from 'react'
 import Data from '../../database/Data.json'
 import { Grid } from '@material-ui/core'
 import { Typography } from '@material-ui/core'
 import CheckCSS from './CardCheck.module.css'
 
 const CardCheck = ({category, price, title,  Description, id}) => {
     return (
         <div>
             <div className={CardCss.container}>
            
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
                         
                        <div className={CardCss.actioncart}>
                        <IconButton aria-label="remove" >
                            < AddCircleIcon color="sucess" />
                        </IconButton>
                        </div>
                        <div>
                        <Typography variant="h6" gutterBotton>
                            {0}
                        </Typography>
                        </div>
                        <div>
                            <IconButton aria-label="add" >
                                <RemoveCircleIcon color="sucess"/>
                            </IconButton>
                        </div>
                        <div className={CardCss.cart}>
                            <IconButton aria-label="add to cart" >
                                <AddShoppingCartIcon />
                            </IconButton>
                        </div>
                    </div>
                    <CardActions />
                  
        </div>
                  </Card>
        </div>
             
         </div>
     )
 }
 
 export default CardCheck 