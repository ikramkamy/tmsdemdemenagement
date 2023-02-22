import React, { useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios  from 'axios';
import './user.css';
const User=(props)=>{

 
return(<div className="user_commande">
 <div className=''>
        <div className="elem-user">
        <div  className='elem_user_text'>{props.fname}-{props.name}</div>
        <div className='elem_user_text Grey'>{props.email}</div>
        <div className='elem_user_text Grey'>+33 {props.phone}</div>
        </div>
   
    </div>


</div>)
}
export default User;