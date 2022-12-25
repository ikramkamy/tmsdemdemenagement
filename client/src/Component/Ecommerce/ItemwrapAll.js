import React, { useState } from 'react';
import  './ecommerceAll.css';
import { FaArrowCircleLeft, FaMinus, FaPlus, FaTrash} from 'react-icons/fa';
import { Link } from 'react-router-dom';
const ItemAll=(props)=>{
 const {add,minus}=props; 
return(<div className="wrap-Item">
<div><img src={props.url} className="image-carton" style={{height:"100px", width:"100px" }}/></div>
<div className="Item-Ecommerce">{props.name}</div>
<div className="Item-Ecommerce">{props.dimmension}</div>
<div className=" description-carton">{props.description}</div>

<div className="Item-Ecommerce quantite">
<div className="wrap-icon-itemall" onClick={add}>Ajouter</div>
  {/*<div className="wrap-quantite marge">{props.quantite}</div>
<div className="wrap-icon-item marge"><FaPlus  onClick={add} className="Item-Icons"/></div>*/}

</div>
</div>)
}
export default ItemAll;