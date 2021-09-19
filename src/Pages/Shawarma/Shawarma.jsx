import React from 'react'
import { CardProduct } from '../../components/Card/CardProduct'
import Data from '../../database/Data.json'
import { Navbar } from '../../components/Layout/Navbar/Navbar'
import { Grid } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Footer from '../../components/Layout/Footer'



const Shawarma = () => {

    const Datafilter = Data.filter((product) => product.category === 'Shawarma')
    console.log(Datafilter)


    return (
        <div>
           
            <Navbar />
            <Grid  item xs={12} >
           
            <Typography align='center' gutterBottom variant='h4'  >
            Shawarma
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

export { Shawarma }