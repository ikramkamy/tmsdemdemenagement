import React, { useEffect, useState } from 'react';
import  './e-commerce.css';
import './ecommerceAll.css';
import {FaMinus, FaPlus} from 'react-icons/fa';
import NavBar from '../navBar/NavBar';
import Footer from '../footer/Footer';
import ItemAll from './ItemwrapAll';
import Signin from '../Signin';
import axios from 'axios';
import './cart2.css';
import { producList, producList2,producList3,producList4 } from './produclist';
const Ecommerceall=(props)=>{
const{sendPrixcarton,sendCart}=props;
const[prixcarton,setPrixcarton]=useState(0);
const [increment,setIncrement]=useState();
const [show,setShow]=useState(false);
const[produit,setProduit]=useState(producList)
const[produit2,setProduit2]=useState(producList2);
const[produit3,setProduit3]=useState(producList3)
const[produit4,setProduit4]=useState(producList4)
const [cart,setCart]=useState([]);
const handelshow=(e)=>{
if(cart.indexOf(e)!==-1){
   setShow(true);
  e.quantite=e.quantite+1
  setPrixcarton(prixcarton+Number(e.prix.split(" ")[0]))
  setIncrement(increment+1)
}else{
  setCart([...cart,e]);
  setShow(true);
  e.quantite=e.quantite+1
  setPrixcarton(prixcarton+Number(e.prix.split(" ")[0]))
  setIncrement(increment+1)
}
}
const handelminus=(e)=>{
  if(e.quantite==0){
    alert("la quantité est 0")
  }else{ 
  setShow(true);
    e.quantite=e.quantite-1
    setPrixcarton(prixcarton-Number(e.prix.split(" ")[0]))
    setIncrement(increment+1)
  }}

useEffect(()=>{
  sendPrixcarton(prixcarton);
  //sendCart(cart);
  console.log("prixcarton",prixcarton)

},[prixcarton])
//console.log("CART",cart);
const [quantite,setQuantite]=useState(0)
const plus=()=>{
  setQuantite(quantite+1) ;
}

/*****************************La somme des cartons****************************************/

/*****************************Chekbox For Ecommerce***************************************/
const[d,setD]=useState(false);
const handeld=()=>{
  setD(!d) 
}
const[d1,setD1]=useState(false);
const handeld1=()=>{
  setD1(!d1) 
}
/***************************valiser l'inscription***************************/
const [showsignin, setShowsignin]=useState(true)
const token=localStorage.getItem('token');
const [tk,setTk]=useState(token)
useEffect(()=>{
if(token===null){
  setShowsignin(true)
  const modal = document.querySelector(".modal")
    const closeBtn3 = document.querySelector(".close3")
    modal.style.display = "block";
    closeBtn3.addEventListener("click", () => {
      modal.style.display = "none";
      
    })
console.log("WE ARE NO ADDING PRODUCT BEFOR SIGN IN")
}else if(token){
setShowsignin(false)

console.log("votre session est ouvert vous pouvez commander")
}

},[])

/*********************FETCHER LES UTILISATEUR PAR ID*************/
const [user,setUser]=useState();
const _id=localStorage.getItem('user_id');
//console.log("user",_id)


useEffect(()=>{
axios.get(`/getuserbyid/${_id}`).then((response)=>{
  setUser(response.data);
  console.log("we are getting data unser for Ecommerceall",user)
}).catch((err)=>{
})
},[])

/*****************ENVOYER LA COMMANDE A LADMIN***********/
const [commande,setCommande]=useState({
  user:[],
  cart:[],
});
useEffect(()=>{
  setCommande({
    user:user,
    cart:cart,
  })
console.log("la commande est pret à envoyer",commande)
},[])
const handelcommande=()=>{
axios.post('/ajouter-une-commande',commande).then(()=>{
alert("votre commande a étè envoyée avce succés")
setCart([]);
setShow(false)
localStorage.clear();
}).catch((err)=>{})}




return(<div >
<NavBar/>
  
<div className="wrap-ecommerce">
  <div className="boutTitle"> Notre Boutique </div>
 
 <div className='wrap_shoping_area'>
<h1 className="product-titles mrgtop">Pour le non-fragile</h1>
<h3 className="product-s-titles">Vêtements, livres, ustensiles de cuisine</h3>
<div className="carton-cathegorie-bloc-all">
{produit?.map((e)=>
<ItemAll add={()=>handelshow(e)} 
url={e.url} name={e.name} prix={e.prix} 
dimmension={e.dimmension} quantite={e.quantite} 
description={e.description} plus={plus}  minus={()=>handelminus(e)}/>)}</div>
<div className="sepa-catégorie-cartons">
{/*<MDBInput type="checkbox" id="d" checked={d} onChange={handeld} className="check-box-e-commerce"/>
 <div>Je souhaite que le démènagement emballe mes cartons non fragiles</div>*/}
  
  </div>

<h1 className="product-titles">Pour le fragile</h1>
<h3 className="product-s-titles">Vaisselle, bouteilles, bibelots.</h3>
<div className="carton-cathegorie-bloc-all">{produit2?.map((e)=><ItemAll 
add={()=>handelshow(e)} url={e.url} name={e.name} prix={e.prix} 
minus={()=>handelminus(e)}
dimmension={e.dimmension} quantite={e.quantite} description={e.description}/>)}</div>
<div className="sepa-catégorie-cartons">
{/*<MDBInput type="checkbox" id="d1" checked={d1} onChange={handeld1} className="check-box-e-commerce"/>
  <div>Je souhaite que le démènageur emballe mes cartons fragiles </div>*/}
  
  </div>


<h1 className="product-titles">Pour les vêtements sur cintre</h1>
<div className="carton-cathegorie-bloc-all">{produit3?.map((e)=><ItemAll
 add={()=>handelshow(e)}  url={e.url} name={e.name} prix={e.prix}
 minus={()=>handelminus(e)}
 dimmension={e.dimmension} quantite={e.quantite} description={e.description}/>)}</div>
<h1 className="product-titles">Autres fournitures</h1>
<div className="carton-cathegorie-bloc-all">{produit4?.map((e)=><ItemAll 
 add={()=>handelshow(e)} url={e.url} name={e.name} prix={e.prix} 
 minus={()=>handelminus(e)}
 dimmension={e.dimmension} quantite={e.quantite} description={e.description}/>)}</div>
  
  
  {show &&(
  <div className="modal-cart">
  <div className="cart2">
 
 <div className="cart-title">
  <img alt='' src='/images/tmsdemfooterlogo.png' className='logo-cart2-'/> 

 
 {<div onClick={()=>setShow(false)} className="close-cart">&times;</div>}
 </div>
    <h4 className='client_nom'>{user[0]?.firstName} {user[0]?.lastName}</h4>
    <div className='liste-dachats'>
     {cart?.map((e)=><div className='wrap_shoping_cart_item'>
      <div className="myrow">
     <div className="cart-item">{e.name}</div>
     <img src={e.url} style={{height:"50px",width:"50px"}}/>
     <div className="cart-item">{e.prix}</div>
     <div className="cart-item quantite-cart">
      <div className='wrap_qnt_btn-cart'>
     <button  className="">
      ▴
        </button>
        <button  className="">
        ▾
      </button>
      </div>
     <div> {e.quantite}</div>
     </div>
     </div>
  </div>)} 
  </div>
  <div className="btn-commande" onClick={handelcommande}>Envoyer la commande </div>
  </div> 
    
  </div>)}   

  
  {showsignin && (<div>

    <div className="js-btn"></div>
    <div class="modal">
    <div class="modal_content-signin">
   <span class="close3" style={{display:"none"}}>&times;</span> 
    <Signin hidesignBox={()=>setShowsignin(false)}/>
     
   </div>
</div>

  </div>)}
  



  </div>
  </div>
  <Footer/>
    </div>)
}
export default Ecommerceall;