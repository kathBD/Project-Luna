import React from 'react'
import { Navbar } from '../../components/Layout/Navbar/Navbar'
import Data from '../../database/Data.json'
import { CardProduct } from '../../components/Card/CardProduct'
import { Grid } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import Footer from '../../components/Layout/Footer'


const Combos = () => {


    const Datafilter = Data.filter((product) => product.category === 'Combos')
    console.log(Datafilter)

    return (
        <div>
            <Navbar />
            <Grid  item xs={12} >
           
           <Typography align='center' gutterBottom variant='h4'  >
           Combos
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
                    title={product.title}
                    Description={product.Description}
                />
                     
               ))}
             </Grid>
             <Footer/>


        </div >
    )
}

export { Combos }


