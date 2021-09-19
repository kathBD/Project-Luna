import React from "react";
import MoreCSS from './MorePopular.module.css'
import LocalMallIcon from '@material-ui/icons/LocalMall';
import { Link } from "react-router-dom";


const MorePopular = (product) => {
  

  return (
    <div className={MoreCSS.featured}>
      <div className={MoreCSS.container}>
      <div className={MoreCSS.img}>
     
     </div>
     <div className={MoreCSS.name}>
       <div className={MoreCSS.info}>
         <h3>Combo Badi</h3>
         <p>$ {36000}</p>
         <div>
           <div className={MoreCSS.Description}>
             <p>"2 Shawarma , carne de pollo y falafel, Lechuga, Tomate, salsa tzatziki(yogurt), Humus, + 2 gaseosas 250ml + papas a la francesa"</p>
           </div>

           <div className={MoreCSS.sale}>
             <Link to='/Combos'>
                 <i className={MoreCSS.icon}>ver más<LocalMallIcon/> </i>
    
             </Link>
           </div>
         </div>
       </div>
       </div>

      </div>
     
        </div>
        );
};

export default MorePopular;
