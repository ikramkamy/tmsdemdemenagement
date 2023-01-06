import react,{useState,useEffect} from 'react';
import './contact.css';
import NavBar from '../navBar/NavBar';

const Contactus=()=>{

const handelcontact=()=>{
    alert("Merci de nous avoir contacter :)")
}

const [input,setInput]=useState({})
const handelChange=(e)=>{

setInput({
email:e.target.value,
name:e.target.value,
phone:e.target.value,
objet:e.target.value,
})

}
console.log("succed",input)
    return(<div className="formContactt">
        <NavBar/>
  
    <h1 style={{color:"#2C216F"}}>Contactez Nous</h1>
<div className='wrap_contact_form'>
<div className='wall_contact'>
    <img src='/images/logo-01.png'/>
 
</div>
<div className='wrap_form'>
    <div className="formContactContainer">
        <div className="fieldContent">
            <div className="fieldLabelContent">
                <label> E-mail</label>
            </div>
            <div className="fieldInputContent">

        <input  
                    placeholder="EX: email@gmail.com"
                    value={input.email}
                    onChange={((e)=>handelChange(e))} 
                    name="email" className='Contact_page_input'/>

            </div>
        </div>
        <div className="fieldContent">
            <div className="fieldLabelContent">
                <label> Nom et Prénom</label>
            </div>
            <div className="fieldInputContent">

               
<input   placeholder="Nom et Prénom" name="name" 
onChange={handelChange}
className='Contact_page_input'/>
                    
                

            </div>
        </div>
        <div className="fieldContent">
            <div className="fieldLabelContent">
                <label> Télèphone </label>
            </div>
            <div className="fieldInputContent">
<input  name="phone" 
placeholder="Ex :+33632225599"
onChange={handelChange}
className='Contact_page_input'/>
              

            </div>
        </div>

        <div className="fieldContent">
            <div className="fieldLabelContent">
                <label>Objet </label>
                <div className='fieldInputContent'>
                <input  name="objet" onChange={((e)=>handelChange)}
placeholder="Déménagement économique" 
className='Contact_page_input'/>
</div>
            </div> </div>
       
       
    </div>

    <div className="sendButton">

<div className="sendCotent">  
        <button onClick={handelcontact}> Envoyer</button>

        </div>
    </div>
    </div>
   
    </div>
</div>)
}
export default Contactus;