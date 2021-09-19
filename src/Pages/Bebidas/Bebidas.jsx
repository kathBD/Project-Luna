import React from 'react'
import { Navbar } from '../../components/Layout/Navbar/Navbar'
import Data from '../../database/Data.json'
import { CardProduct } from '../../components/Card/CardProduct'
import { Grid } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import Footer from '../../components/Layout/Footer'





const Bebidas = () => {

    const Datafilter = Data.filter((product) => product.category === 'Bebidas')
    console.log(Datafilter)
    return (
        <>
            <Navbar />
            <Grid  item xs={12} >
           <Typography align='center' gutterBottom variant='h4'  >
       Bebidas
           </Typography>
           </Grid>
            <hr />
            <Grid container
            direction="column"
            justifyContent="center"
            alignItems="center">
         
            {Datafilter.map((product) => (

                <CardProduct key={product.id} image={product.image}
                    category={product.category} price={product.price}
                    Description={product.Description}
                />
          
                
            ))}
           
           </Grid>
           <Footer/>
           
    
        </>
    )
}

export { Bebidas }



