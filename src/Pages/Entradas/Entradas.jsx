
import React from 'react'
import Card  from '../../components/Card/Card'
import { Navbar } from '../../components/Layout/Navbar/Navbar'
import EntardasCss from '../Entradas/Entradas.module.css'


const Entradas = () => {
    return (
    <div>
            <Navbar/>
            <h1 className= {EntardasCss.title}>Entradas</h1>
            <Card/>
        </div>
    )
}

export  {Entradas}

