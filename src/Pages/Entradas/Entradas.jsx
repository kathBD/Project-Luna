import React from 'react'
import { Navbar } from '../../components/Layout/Navbar/Navbar'
import Data from '../../database/Data.json'
import { CardProduct } from '../../components/Card/CardProduct'
import { Grid } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import Footer from '../../components/Layout/Footer'



const Entradas = () => {


    const Datafilter = Data.filter((product) => product.category === 'Entradas')
    console.log(Datafilter)
    return (
        <div>
            <Navbar />
            <Grid  item xs={12} >
           
            <Typography align='center' gutterBottom variant='h4'  >
           Entradas
            </Typography>
            </Grid>
            <hr />
        <Grid container >
            {Datafilter.map((product) => (
              <Grid   xs={12} sm={6}>
                <CardProduct key={product.id} image={product.image}
                    category={product.category} price={product.price}
                    Description={product.Description}
                />
                </Grid>
            ))}

               </Grid>
               <Footer/>

        </div>
    )
}

export { Entradas }

