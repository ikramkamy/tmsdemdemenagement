import React, { useState,useEffect } from 'react';
import Comm from './Commade';
import axios from 'axios';
import './admin.css';
import Utilisateur from './Utilisateur';
import Pagination from './Utilisateur/Pagination';
import Produit from './Produit';
import ProduitCreate from './Produit/CreateProduit';
import EditeProduit from './Produit/ProduitEdite';
import CubageCreate from './Cubage/CreateCubage';
import Dashboard from './Dashboard';
import DevisA from './DevisA';
const Admin=()=>{
const [showCommande,setshowCommande]=useState(false);
const [showusers,setshowusers]=useState(false);
const [showproduit,setshowproduit]=useState(false);
const [showcubage,setShowcubage]=useState(false)
const [dash,setDash]=useState(false)
const [commande,setCommande]=useState([]);
const [user,setUser]=useState([]);
const [produit,setProduit]=useState([]);
const [cubage,setCubage]=useState([]);
const [showtypecommande,setShowtypecommande]=useState(false)
useEffect(()=>{
axios.get('/afficher-les-commandes').then((response)=>{
    setCommande(response.data);
    
    }).catch((err)=>{
})
},[commande])

/***************************UTILISAEURS*************************/
const [currentPage,setCurrentPage]=useState(1);
const [dataperpage,setDataperpage]=useState (10);
const indexOfLastPost=currentPage * dataperpage;
const indexOfFirstPost=indexOfLastPost-dataperpage;
const currentPost=user.slice(indexOfFirstPost,indexOfLastPost);
const currentPost2=commande.slice(indexOfFirstPost,indexOfLastPost);

const paginate =(number)=> setCurrentPage(number);
useEffect(()=>{
    axios.get('/getallusers').then((response)=>{
      
        setUser(response.data)
        
    }).catch((err)=>{
    })
    },[user])
/*******************************PRODUITS******************************/
useEffect(()=>{
    axios.get('/getproduit').then((response)=>
        setProduit(response.data)
    )
},[produit])
 const handeldelete=(_id)=>{
     alert("Êtes-vous sûr de vouloir supprimer cet élément ?");
    
axios.delete(`/Deleteproduit/${_id}`,).then((response)=>{
console.log("respnse",response);
})
 }
 /******************************Supprimer un utilisateur*********************/
 const deletuser=(_id)=>{
alert("Êtes-vous sûr de vouloir supprimer cet utilisateur ?");
axios.delete(`/delete/${_id}`).then((response)=>{
 })
    
}
/*********************************CUBAGE*****************************/
const [showcubageCreate,setshowcubageCreate]=useState(false);
useEffect(()=>{
axios.get('/getcubage').then((response)=>setCubage(response.data))
},[cubage])
const handelshowcubageCreate=()=>{
    setshowcubageCreate(!showcubageCreate)
}
/*************************FETCH SOTO / DEVIS ESTIMATEUR COMMAND****************** */
const[devis,setDevis]=useState([])
const [showdevis,setShowdevis]=useState(false)
useEffect(()=>{
    axios.get('/getallsoto').then((response)=>setDevis(response.data))
    
},[devis])
/*******************************AFICHAGE DES ELEMENT******************************/
const handelshowcommande=()=>{
    setshowCommande(true);
    setshowusers(false);
    setshowproduit(false);
    setShowcubage(false);
    setDash(false);
    setShowdevis(false)
}
const handelshowusers=()=>{
    setshowCommande(false );
    setshowproduit(false);
    setShowcubage(false);
    setshowusers(true );
    setDash(false);
    setShowdevis(false)
}
const handelshowproduit=()=>{
    setshowusers(false);
    setshowCommande(false );
    setshowproduit(true);
    setShowcubage(false);
    setDash(false);
    setShowdevis(false)
}
const handelshowcubage=()=>{
    setshowusers(false);
    setshowCommande(false );
    setshowproduit(false);
    setShowcubage(true);
    setDash(false);
    setShowdevis(false)
}
const showDashboard=()=>{
setDash(true)
setshowusers(false);
setshowCommande(false );
setshowproduit(false);
setShowcubage(false);
setShowdevis(false)
}
const handelshowdevis=()=>{
    setShowdevis(true)
    setDash(false)
setshowusers(false);
setshowCommande(false );
setshowproduit(false);
setShowcubage(false);
}
const [showcreate,setShowcreate]=useState(false);
const [showedite,setShowedite]=useState(false);
const showhendel1=()=>{
    setShowcreate(!showcreate)
}
const showhendel=()=>{
    setShowedite(!showedite) 
}
const showtypeC=()=>{
    setShowtypecommande(true)
    setDash(false)
setshowusers(false);
setshowCommande(false);
setshowproduit(false);
setShowcubage(false);
}
const showCalender=()=>{
    setShowtypecommande(false)
    setDash(false)
setshowusers(false);
setshowCommande(false );
setshowproduit(false);
setShowcubage(false);  
}



return(<div className="admin">
    {/*<div className="nav-admin">
        <div className="side-title">TMSDEM </div>
</div>*/}
<div className="wrap-admin">
<div className="side-bar">
    <div className='wrap_logo_admin'>
TMSDEM
</div>
<div className='wrap_logo_admin'>
    <img src='/images/icones/admin/admin.png' alt="l'admin de TMSDEM" className='mini-icon-admin'/>
<div className='admin-name'>Biri Massinissa</div>
</div>
<div className="side-btn" onClick={showDashboard}>
    <img src="/images/icones/admin/dashboard.png" className='mini-icon-admin' 
    alt="la liste des utilisateurs TMSDEM"/>Tableau de bord</div>
<div className="side-btn" onClick={handelshowusers}>
    <img src="/images/icones/admin/user.png" className='mini-icon-admin' 
    alt="la liste des utilisateurs TMSDEM"/>Utilisateur</div>
<div className="side-btn" onClick={showtypeC}>
    <img src="/images/icones/admin/checkout.png" 
    className='mini-icon-admin' alt="la liste des commandes TMSDEM"/>
    
     commandes</div>
     {showtypecommande && (<ul className='ul_side_btn'>
     <li className="side-btn" onClick={handelshowcommande}>E-commerce</li>
    <li className="side-btn" onClick={handelshowdevis}>Devis </li>
    <li className="side-btn">Chrono</li>
     <li className="side-btn">Aise </li>
     <li className="side-btn">Je planifie mon déménagement </li>
</ul>) }
<div className="side-btn" onClick={handelshowproduit}>
   <img src="/images/icones/admin/gift.png" className='mini-icon-admin' 
   alt="La liste des produit TMDSEM"/>Produits</div>
<div className="side-btn" onClick={handelshowcubage}>
    <img src="/images/icones/admin/cube.png" className='mini-icon-admin' 
    alt="la liste des élèmets de cubage TMDEM"/>cubage</div>
<div className="side-btn" onClick={showCalender}>
    <img src="/images/icones/admin/calendar.png" className='mini-icon-admin' 
    alt="le calendrier TMDEM"/>Calendrier</div>
</div>
{showCommande &&(<div className="item-admin">
<h2 className="title-admin-inter">les commandes</h2>
{currentPost2?.map((e)=>

<Comm   cart={e.cart}  user={e.user} key={e._id}/>

)}



<Pagination  

    dataperpage={dataperpage} 
    totaldata={user.length} 
    paginate={paginate}/>
 
</div>)}

{showusers && (<div className="item-admin">
<h2 className="title-admin-inter">les utilisateurs</h2>
<div  className="item-admin-inter" >
<div className="items-user">
</div>

</div>
{currentPost?.map((e)=>
<Utilisateur  name={e.firstName} phone={e.phone}  email={e.email} fname={e.lastName} 
deletuser={
    ()=>deletuser(e._id)}/>

)}
 <Pagination  

    dataperpage={dataperpage} 
    totaldata={user.length} 
    paginate={paginate}/>
 
   
</div>)}


{showproduit &&(<div  className="item-admin">
<h2 className="title-admin-inter">les Produits</h2>
<div className=" btn-create" onClick={showhendel1}>
<div className="btn">Ajouter un produit</div></div>
<div  className="item-admin-inter" >
<div className="items-user">
<div className="elem-user">Produit</div>
<div className="elem-user">Dimmension</div>
<div  className="elem-user">Prix</div> 
<div  className="elem-user larger">Cathegorie</div> 


<div className="elem-user">Supprimer</div>

<div className="elem-user" >Modifier</div>
</div>

</div>
{produit?.map((e)=>
<Produit  name={e.name} 
 cathegorie={e.cathegorie} dimmension={e.dimmension} 
 prix={e.prix}
 showhendel1={showhendel1}
 showhendel={showhendel}
 handeldelete={()=>handeldelete(e._id)}
 _id={e._id}
 />

)}
 <Pagination  

    dataperpage={dataperpage} 
    totaldata={user.length} 
    paginate={paginate}/>
 
{showcreate && (<ProduitCreate showhendel1={showhendel1}/>)}
 {showedite && (<EditeProduit   showhendel={showhendel}/>)}
</div>)}




{showcubage && (<div  className="item-admin">
<h2 className="title-admin-inter">l'élèment de cubage</h2>
<div className=" btn-create" >
<div className="btn" onClick={handelshowcubageCreate}>Ajouter un élèment de cubage</div>
</div>
<div  className="item-admin-inter" >
<div className="items-user">
<div className="elem-user">L'élèment</div>
<div className="elem-user">Le volume</div>
<div className="elem-user">Supprimer</div>
</div>
</div>

{showcubageCreate && (<CubageCreate handelshowcubageCreate={handelshowcubageCreate}/>)}
</div>)}


{dash && (<Dashboard user={user} soto={commande}/>)}

{showdevis && (<div className="item-admin">

<h2 className="title-admin-inter">les Devis reçus</h2>
<div  className="item-admin-inter" >
<div className="items-user">
</div>

</div>
<div className="wrap_flex_style">

        <div  className='item_devis_style'>Client</div>
        <div  className='item_devis_style'>Adresses</div>
        <div  className='item_devis_style'>Devis</div>

</div>

{devis?.map((e)=><DevisA name={e.name} fname={e.fname} total={e.total} email={e.email} num={e.num}
add1={e.adress1.split(',')[0]} add2={e.adress2.split(',')[0]} typedem={e.type_dem}
/>)}
</div>)}

</div>

</div>)
}
export default Admin;