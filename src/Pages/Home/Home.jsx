
import React from 'react'
import HomeCss from '../Home/Home.module.css'
import Card from '../../components/Card/Card'
import { Navbar } from '../../components/Layout/Navbar/Navbar'
import { Link } from 'react-router-dom'



const Home = () => {
    return (
        <div>
            <Navbar />
            <div className={HomeCss.menulist}>
                <div className={HomeCss.items}>
                    <Link to='/Shawarma' className={HomeCss.circlebtn1}></Link>
                   
                </div>
                <div>
                <Link to='/Combos' className={HomeCss.circlebtn2}></Link>
      
                  </div>
                  <div>
                <Link to='/Entradas' className={HomeCss.circlebtn3}></Link>
              
                  </div>
                  <div>
                <Link to='/Bebidas' className={HomeCss.circlebtn4}></Link>
               
                  </div>
            </div>
            <hr />
            <Card />

        </div>
    )
}

export { Home }
