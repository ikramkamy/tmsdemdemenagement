

import axios from 'axios';
import {LOGIN_USER} from './types';
import {useHistory} from 'react-router-dom';


const token=localStorage.getItem('token');

export function loginUser (newuser){
    
    if(newuser.password===""||newuser.email===""){alert(`SVP remplissez tous les champs`)}
    //event.preventDefault();
/************ on vérifie d'abord que le token n'est pas expiré*****************/
console.log("we are posting ")
    /**/
    console.log(newuser);
    const request =axios.post("http://localhost:3001/signin",newuser)
    .then(response => {
    
     localStorage.setItem('token', response.data.token);
     localStorage.setItem('user_id', response.data.user._id);
    console.log("token",response.data.token)
    window.location.reload();    
    }).catch(error => {
    console.log("erreur in posting sign in request is : here",error)
     alert("Mot de passe ou email incorrect")
    });
    
    return {
        type: LOGIN_USER,
        payload: request
    }
    }
    