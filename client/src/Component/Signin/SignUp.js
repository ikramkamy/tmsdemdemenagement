import React,{useState} from 'react';
import './signup.css';
import axios from 'axios';
import {FaArrowCircleLeft} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
const Signup=(props)=>{
  const {handelshowBack}=props;
  const history = useHistory();
  const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const [input,setInput]=useState({
    nom:"",
    email:"",
    password:"",
    firstName:"",
    lastName:"",
    phone:"",
})
const handelChange=(event)=>{
const {name,value}=event.target;
    setInput(prevInput=>{
      return  { 
        ...prevInput,
        [name]:value
    }
    })
    }
   
const handelClick=(event)=>{
console.log('we are in signup page')
event.preventDefault();
if(input.firstName ==''  || input.email ==''|| input.password =='' || input.phone =='' || input.lastName =='' ){
alert("Remplissez tous les champs SVP !")
        }
else if(!emailPattern.test(input.email)&& input.email.length>0){
alert("Entrez un email valide SVP !")
       }else{
        console.log("we are posting ")
        const newuser={
            firstName:input.firstName,
            lastName:input.lastName,
            email:input.email,
            phone:input.phone,
            password:input.password
        }
        console.log(newuser);
        axios.post(`/signup`,newuser)
        .then(response => {
         console.log("post with axios succed")
     
         /*history.push(`/`)*/
         handelshowBack();
        }).catch(error => {
          console.log("the raison of failure", error) 
        });
      }
        }

    
return(<div className="signup">

<div className="signin-box-wrap">
<div className="signup-box">
<form className="form-signup">
<label>Nom</label>
<input type="text"  placeholder="Nom" onChange={handelChange} value={input.lastName} name="lastName" />
<label>Prénom</label>
<input  type="text"  placeholder="Prénom" onChange={handelChange} value={input.firstNamed} name="firstName" />
<label>Email</label>
<input  type="email"  placeholder="email@gmail.com" onChange={handelChange} value={input.email} name="email"/>
<label>Télèphone</label>
<input  type="Number" maxLength="10" placeholder="Numéro de télèphone" onChange={handelChange} value={input.phone} name="phone"/>
<label>Password</label>
<input  type="password"  placeholder="password" onChange={handelChange} value={input.password} name="password" />

<div className="btn-signup-wrapper">
<div className="signup-btn-wrapper"><Link className="signup-btn"  onClick={handelClick} to="/shop">S'inscrir</Link></div>
<FaArrowCircleLeft onClick={handelshowBack} style={{color:"#2C216F",cursor:"pointer"}}/>
</div>
</form>

</div>
</div>

</div>)
}

export default Signup;