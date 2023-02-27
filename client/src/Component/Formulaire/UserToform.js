import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import './userForm.css';
const UserToform=(props)=>{
   const {senduser}=props;
const [selectValue, setSelectValue] = useState('');
const [userDevis,setUserDevis]=useState({
type_dem:"",
civilite:"",
prenom:"",
nom:"",
email:"",
num:""
})


const handelchange1=(e)=>{setUserDevis({
   type_dem:e.target.value,
   civilite:userDevis.civilite,
   prenom:userDevis.prenom,
   nom:userDevis.nom,
   email:userDevis.email,
   num:userDevis.num
})}
const handelchange2=(e)=>{setUserDevis({civilite:e.target.value,
   type_dem:userDevis.type_dem, prenom:userDevis.prenom,
   nom:userDevis.nom,
   email:userDevis.email,
   num:userDevis.num})}
const handelchange3=(e)=>{setUserDevis({
   prenom:e.target.value,
   nom:userDevis.nom,
   email:userDevis.email,
   num:userDevis.num,
   type_dem:userDevis.type_dem,
   civilite:userDevis.civilite,
})}
const handelchange4=(e)=>{setUserDevis({
   nom:e.target.value,
   prenom:userDevis.prenom,
    email:userDevis.email,
   num:userDevis.num,
   type_dem:userDevis.type_dem,
   civilite:userDevis.civilite,})}
const handelchange5=(e)=>{setUserDevis({
   email:e.target.value,
   num:userDevis.num,
   type_dem:userDevis.type_dem,
   civilite:userDevis.civilite,
   nom:userDevis.nom,
   prenom:userDevis.prenom,
})}
const handelchange6=(e)=>{setUserDevis({
   num:e.target.value,
   type_dem:userDevis.type_dem,
   civilite:userDevis.civilite,
   prenom:userDevis.prenom,
   nom:userDevis.nom,
   email:userDevis.email,
})}
const handelclick=()=>{
   senduser(userDevis)
}
 return(<div className='wrap_form_user'>
    <Form className='usertoform'>
    <Form.Group className="mb-3  " controlId="formBasicEmail">
    <Form.Label className='font_label_user_form'>Type de déménagement</Form.Label> 
  
<select 
onChange={handelchange1} value={userDevis.type_dem} placeholder="type">
<option></option>
   <option>A titre personnel</option>
   <option>Mobilité professionnelle</option>
   <option>Transfert d'entreprise</option>
</select>
     
      </Form.Group>
<div className='wrap_form_user_f'>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Civilité</Form.Label>
        <select defaultValue={selectValue} className='unify_inputs'onChange={handelchange2} value={userDevis.civilite}>
   <option></option>
   <option>Monsieur</option>
   <option>Madame</option>
   <option>Mademoiselle</option>
</select>
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Prénom</Form.Label>
        <Form.Control type="text" placeholder="Votre prénom"  className='unify_inputs' 
        onChange={handelchange3} value={userDevis.prenom}/>
       
      </Form.Group>
    
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nom</Form.Label>
        <Form.Control type="text" placeholder="Votre nom"  className='unify_inputs' 
        onChange={handelchange4} value={userDevis.nom}/>
       
      </Form.Group>
      </div>
     
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Votre adresse email" onChange={handelchange5} value={userDevis.email}/>
     </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Télèphone</Form.Label>
        <Form.Control type="number" placeholder="Votre numéro de télèphone" 
        onChange={handelchange6} value={userDevis.num}/>
       
      </Form.Group>
     
    </Form>
    <button className='envoyerCommentButton width_btn' onClick={handelclick}>
        Obtenir une estimation
      </button>

 </div>)   
}
export default UserToform;