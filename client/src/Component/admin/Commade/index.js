import React, { useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios  from 'axios';
import Cart from './Cart.js';
import User from './User.js';
import './commande.css';
import {FaPen, FaTrash, sFaTrash} from 'react-icons/fa';

const Comm=(props)=>{
    const {cart,user}=props;
const [somme,setSomme]=useState(0)
useEffect(()=>{
   
})
 const [showcart,setShowcart]=useState(false)
   const handewhocart=()=>{
    setShowcart(!showcart)
   }
return(<div className="item-admin-inter">
    <div className="items-commande">
{<User name={user[0].firstName} fname={user[0].lastName} phone={user[0].phone} email={user[0].email}/>}
<div className='list_cart_admin'>
    <img src="/images/icones/admin/checklist.png" 
    alt="la liste des achats TMSDEM" 
    className='mini-icon-admin view_list_achat'
    onClick={handewhocart}
    />
    {showcart && <div className='wrap_list_achat'>     <div className='liste_achat_titres'>
<div><img src="/images/icones/admin/box.png"  className='mini-icon-admin' alt="le nom du produit"/></div>
<div><img src="/images/icones/admin/overflow.png"  className='mini-icon-admin' alt="la quantité par unité"/></div>
<div><img src="/images/icones/admin/coin.png"  className='mini-icon-admin' alt="le prix unitaire"/></div>
</div>{cart?.map((e)=>
   

    <Cart name={e.name} quantite={e.quantite}
    prix={e.prix}
    somme="4"
    />
   )}</div>}

</div>

</div>
<div className="wrap-delete-btns">
    <div className="icon-delete"><FaTrash/></div>
    </div>
</div>)
}
export default Comm;