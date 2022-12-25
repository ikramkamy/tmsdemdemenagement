import React, { useEffect, useState } from 'react';
import  './e-commerce.css';
import { FaArrowCircleLeft, FaLock, FaMinus, FaPlus, FaTrash} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Item from './ItemWrap';
import  {MDBInput}  from 'mdbreact';
import useForceUpdate from 'use-force-update';
const Ecommerce=(props)=>{
  
const forceUpdate = useForceUpdate();
const{sendPrixcarton,show,sendCart}=props;
const[prixcarton,setPrixcarton]=useState(0);
const [increment,setIncrement]=useState();

const[produit,setProduit]=useState([
{name:"carton livre",
prix:"20 £",
dimmension:"35 x 27,5 x 30 cm",
quantite:0,
description:"3 à 4 cartons par mètre linéaire de livres",
url:"/images/cartonLivre.jpg"
},
{
  url:"/images/cartonstandard.jpg",
name:"carton standard",
prix:"20 £",
dimmension:"55 x 35 x 30 cm",
quantite:0,
description:"10 à 20 par pièce"
},

  ])
const[produit2,setProduit2]=useState([
    {
      url:"/images/cartonstandard.jpg",
      name:"Carton renforcéCarton renforcé",
    prix:"20 £",
    dimmension:"55 x 35 x 30 cm",
    quantite:0,
    description:"3 à 5 par pièce"
    },
    {
url:"/images/cartongrand.jpg",
name:"Grand carton fragile ultra renforcé",
prix:"20 £",
dimmension:"45 cm x 45 cm x 56,5 cm",
quantite:0,
description:""
},
{
url:"/images/cartonverre.jpg",
name:"Carton 24 verres",
prix:"20 £",
dimmension:"35 × 34 × 27 cm",
quantite:0,
description:"Pour 24 verres. Accepte les verres d'un diamètre maximum 7.6 cm et d'une Hauteur maximum 14,4 cm"
},
{
url:"/images/cartonultraverre.jpg",
name:"Carton ultra renforcé 75 verres",
prix:"20 £",
dimmension:"45 cm x 45 cm x 56,5 cm",
quantite:0,
description:""
},
{
url:"/images/cartonbouteille.jpg",
name:"Carton bouteilles",
prix:"20 £",
dimmension:"35 x 34 x 27 cm",
quantite:0,
description:"Pour 12 bouteilles. Toutes sortes de bouteilles respectant un diamètre inférieur à 8,6 cm pour une hauteur maximum de 28 cm"
},
{
url:"/images/cartonassiettes.jpg",
name:" Carton assiettes",
prix:"20 £",
dimmension:" 35 × 34 × 27 cm",
quantite:0,
description:"Pour 9 assiettes. Ce croisillon en carton accepte toutes les assiettes d'un diamètre de 28 cm maximum et de 3.2 cm d’épaisseur"
},
{
url:"/images/papierbull.jpg",
name:"Papier bulle",
prix:"20 £",
dimmension:"Rouleau de 10 m",
quantite:0,
description:""
},
{
url:"/images/bullcraft.jpg",
name:"Bullkraft",
prix:"20 £",
dimmension:" 1,25 m x L 10 m",
quantite:0,
description:""
},
  ]);
  
const[produit3,setProduit3]=useState([
    {
    url:"/images/cartonpandri.jpg",
    name:"Carton penderie",
    prix:"20 £",
    dimmension:"  1m linéaire de vêtements sur cintres = 2 cartons",
    quantite:0,
    description:""
    },

  ])
const[produit4,setProduit4]=useState([
  {
  url:"/images/rouloadhesif.jpg",
  name:"Rouleau adhésif",
  prix:"20 £",
  dimmension:"(1 pour 20 cartons).",
  quantite:0,
  description:""
  },
  {
  url:"/images/divider.jpg",
  name:"Dévidoir Pistolet pour adhésif",
  prix:"20 £",
  dimmension:"",
  quantite:0,
  description:""
  },
  {
    url:"/images/hous.jpg",
  name:" Housse de matelas",
  prix:"20 £",
  dimmension:"2,30 m de long, 2 m de large et 22 cm de haut",
  quantite:0,
  description:""
  },
  {
  url:"/images/film.jpg", 
  name:"Film étirable opaque",
  prix:"20 £",
  dimmension:"45 cm x 270 m",
  quantite:0,
  description:""
  },

])
const [cart,setCart]=useState([]);

/*
const add=(e)=>{
  setCart(...{e})
}
*/

const handelshow=(e)=>{
//console.log(e.name)
//console.log(cart[0].name)
 cart.find(e=>e.quantite+1);
 if(cart.indexOf(e)!==-1){
  e.quantite=e.quantite+1;
 }
 else{
  e.quantite=e.quantite+1;
  setCart([...cart,e]);
 }
   
  
  
 // setCart([...cart,e]);
  //setShow(true);
  //e.quantite=e.quantite+1;





  setPrixcarton(prixcarton+Number(e.prix.split(" ")[0]))
  console.log("ptix total",prixcarton)
  setIncrement(increment+1)
}
const handelminus=(e)=>{
  if(e.quantite==0){
    alert("la quantité est 0")
  }else{ 
  //setShow(true);
    e.quantite=e.quantite-1
    setPrixcarton(prixcarton-Number(e.prix.split(" ")[0]))
    setIncrement(increment+1)
  }
}

useEffect(()=>{
  sendPrixcarton(prixcarton);
  /*sendCart(cart);*/
  console.log("prixcarton",prixcarton)

},[prixcarton])
//console.log("CART",cart);
const [quantite,setQuantite]=useState(0)
const plus=()=>{
  setQuantite(quantite+1) ;
}

/********************************************La somme des cartons****************************************/

/*****************************Chekbox For Ecommerce**************************************** */
const[d,setD]=useState(false);
const handeld=()=>{
  setD(!d) 
}
const[d1,setD1]=useState(false);
const handeld1=()=>{
  setD1(!d1) 
}
return(<div className="wrap-ecommerce">
<h1 className="product-titles">Pour le non-fragile</h1>
<h3 className="product-s-titles">*Vêtements, livres, ustensiles de cuisine</h3>
<div className="carton-cathegorie-bloc">
{produit.map((e)=>
{
  return(
<Item add={()=>handelshow(e)} 
url={e.url} name={e.name} prix={e.prix} 
dimmension={e.dimmension} quantite={e.quantite} 
description={e.description} plus={plus}  minus={()=>handelminus(e)}/>
  )
}
)}

</div>
<div className="sepa-catégorie-cartons">
<div style={{display:"flex"}}> 
                                    <input  type="radio" label="selectoptioncarton"  id="d" value="Je souhaite que le démènagement emballe mes cartons non fragiles" name="rdB5" checked={d}/*checked={autoO}*/  onChange={handeld}/>
                                    <label for="selectoptioncarton">Je souhaite que le démènagement emballe mes cartons non fragiles</label>
                                    </div>
                                


{/*<MDBInput type="checkbox" id="d" checked={d} onChange={handeld} className="check-box-e-commerce"/>
 
 
 
 <div>Je souhaite que le démènagement emballe mes cartons non fragiles
 
  </div> 
  */}
  </div>

<h1 className="product-titles">Pour le fragile</h1>
<h3 className="product-s-titles">*Vaisselle, bouteilles, bibelots.</h3>
<div className="carton-cathegorie-bloc">{produit2.map((e)=><Item 
add={()=>handelshow(e)} url={e.url} name={e.name} prix={e.prix} 
minus={()=>handelminus(e)}
dimmension={e.dimmension} quantite={e.quantite} description={e.description}/>)}</div>
<div className="sepa-catégorie-cartons">

<div style={{display:"flex"}}> 
                                    <input  type="radio" label="selectoptioncarton1"  id="d1" value="Je souhaite que le démènageur emballe mes cartons fragiles " name="rdB5" checked={d}/*checked={autoO}*/  onChange={handeld1}/>
                                    <label for="selectoptioncarton1">Je souhaite que le démènageur emballe mes cartons fragiles </label>
                                    </div>


{/*<MDBInput type="checkbox" id="d1" checked={d1} onChange={handeld1} className="check-box-e-commerce"/>
 
 
 
  <div>Je souhaite que le démènageur emballe mes cartons fragiles </div>*/
}
  </div>


<h1 className="product-titles">Pour les vêtements sur cintre</h1>
<div className="carton-cathegorie-bloc">{produit3.map((e)=><Item 
 add={()=>handelshow(e)}  url={e.url} name={e.name} prix={e.prix}
 minus={()=>handelminus(e)}
 dimmension={e.dimmension} quantite={e.quantite} description={e.description}/>)}</div>
<h1 className="product-titles">Autres fournitures</h1>
<div className="carton-cathegorie-bloc">{produit4.map((e)=><Item 
 add={()=>handelshow(e)} url={e.url} name={e.name} prix={e.prix} 
 minus={()=>handelminus(e)}
 dimmension={e.dimmension} quantite={e.quantite} description={e.description}/>)}</div>
  
  
  {show &&(
  <div className="modal-cart">
  <div className="cart">
 
 <div className="cart-title">
   <h3>Mon panier</h3>
 <div>< FaLock className="close-cart"/> </div>
 </div>
     {cart.map((e)=><div className="row">
     <div className="cart-item">{e.name}</div>
     <img src={e.url} style={{height:"50px",width:"50px"}}/>
     <div className="cart-item">{e.prix}</div>
     <div className="cart-item quantite-cart">
     <FaMinus  className="Item-Icons"/><p> {e.quantite}</p>
     <FaPlus  className="Item-Icons"/></div>
  </div>)} 
  </div> 
    
  </div>)}   

  
  
  
  
 
 

   


    
    
    </div>)
}
export default Ecommerce;