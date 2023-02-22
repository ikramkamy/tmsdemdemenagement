import React, { useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios  from 'axios';
import './utilisateur.css';
import {FaPen, FaTrash, sFaTrash} from 'react-icons/fa';
const Utilisateur=(props)=>{
const {deletuser}=props
 
return(<div className="item-admin-inter">
    <div className="new-user-itemm">
        <div className='info-user'>
        <div className="elem-user">
        <div  className='elem_user_text'>{props.fname}-{props.name}</div>
        <div className='elem_user_text Grey'>{props.email}</div>
        <div className='elem_user_text Grey'>+33 {props.phone}</div>
        </div>
   
    </div>
    <div className='commande-user'></div>
    
    
    
    <div className=" elem-user icon-delete" onClick={deletuser}><FaTrash/></div>
</div>


</div>)
}
export default Utilisateur;