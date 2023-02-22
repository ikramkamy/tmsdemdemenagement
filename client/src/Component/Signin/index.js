import React,{useState,useEffect} from 'react';
import './signin.css';
import {loginUser} from '../actions/useractions';
/* test pull2*/ 
import Signup from './SignUp';

const Signin=(props)=>{
  const {hidesignBox}=props;
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
const AUTH = 'AUTH';
const [issignin,setIssignin]=useState(false);
const {showinscription}=props;
const [sign,setSign]=useState("Connectez-vous")
const [show,setShow]=useState(false)
const handelshow=()=>{
  setShow(!show);
  setSign("Inscrivez-vous");
}
const handelshowBack=()=>{
  setShow(!show);
  setSign("Connectez-vous")

}
const [input,setInput]=useState({
    email:"",
    password:""
})
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const handelChange=(event)=>{
   setEmail(event.target.value);
    }
const handelChange2=(event)=>{
    setPassword(event.target.value);
       }
       
const token=localStorage.getItem('token');
const handelClick=()=>{

input.email=email;
input.password=password;

 loginUser(input).then(response => {
console.log('response of login function',response.data.token)
  }).catch(error => {
  console.log("the raison of failure", error) 
 })
if(token!==null){
  //history.push("/boutique")
  setInput(
   { email:"",
    password:""}
  )
}else if (token===null){
  alert("votre email ou mot de passe est invalide, Vérifiez votre inscription !")
  /*history.push("/boutique")*/
  window.location.reload()
  setInput(
    { email:"",
     password:""}
   )
}

}

const [loginout,setLoginout]=useState("login");

const handelSubmit=(e)=>{
e.preventDefault();
console.log("submit succed")
}

return(

<div className="signin">
  
<div className='side_siginbox'>
<div onClick={hidesignBox}></div>
<div className='sentence'>{sign}</div>
  <div className='wrap_logo_s_box'>
 
<img src="/images/logo-01.png" className="logo-sign_box"/>
 </div>
 </div>
{ !show && (
<div className="signin-box-wrap">

<div className="signin-box">

<form className="form-signin" onSubmit={handelSubmit}>
<label className="label-sigin">Email</label>
<input  className="label-sigin" type="text"  placeholder="email@gmail.com" onChange={handelChange} value={email} name="email"/>
<label className="label-sigin">Mot de Passe</label>
<input className="label-sigin" type="password"  required placeholder="password" onChange={handelChange2} value={password} name="password" />
<div className="btn-signin-wrapper">
 
<button  onClick={handelClick}>Connexion</button>

</div>
</form>
<h4 style={{color:"#2C216F"}}>Vous n'avez pas un compte?</h4>
<span onClick={handelshow} className="inscrire">S'inscrire</span>
</div>
</div>)}


{show && (<div className="wrap-signup">
 
<Signup handelshowBack={handelshowBack}/>


</div>)}


</div>)
}

export default Signin;