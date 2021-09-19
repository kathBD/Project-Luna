import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Hero from './components/Hero/Hero'
import {Home} from './Pages/Home/Home';
import {Shawarma} from './Pages/Shawarma/Shawarma'
import {Entradas} from './Pages/Entradas/Entradas'
import {Combos }from './Pages/Combos/Combos';
import {Bebidas} from './Pages/Bebidas/Bebidas'
import Cart from './components/Cart/Cart';




function App() {

  
  return (
    <div>
     
       <Router> 
   
         <Switch>
         <Route exact  path='/' redirect component={Home}/> 
         <Route  path='/Hero' exact component={Hero}/> 
         <Route path='/Shawarma' exact component={Shawarma}/>  
         <Route  path='/Combos' exact component={Combos}/> 
         <Route  path='/Entradas' exact component={Entradas}/> 
         <Route  path='/Bebidas'  exact component={Bebidas}/> 
         <Route  path='/Cart' exact component={Cart} />
       
     
         
         
       </Switch>
    
    </Router>   
    </div>
  );
}

export default App;
