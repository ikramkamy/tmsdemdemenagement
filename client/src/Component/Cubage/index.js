import React, { useState,useEffect } from 'react';
import  './carton.css';
import {FaArrowDown,FaArrowUp,FaPlus, FaTrash, FaUps} from 'react-icons/fa';
import useForceUpdate from 'use-force-update';

const Cubage=(props)=>{
const{showVolum}=props;
const {handelCubage}=props;
const [i,setI]=useState("0");
const [room,setRoom]=useState([{
  name:"Salon",
  tab:[],
  id:""
},{
  name:"Cuisine",
  tab:[],
  id:""
},
{
  name:"Chambre",
  tab:[],
  id:""
}]);
const [showRoom,setShowRoom]=useState(false);
const [room_volum,setRoom_volum]=useState(0)
const [tableau,setTableau]=useState([]);
const [control,setControl]=useState(false);
const[sommevol,setSommevol]=useState(0);
/************************************FORCE UPDATE*************************/
const forceUpdate = useForceUpdate();
const handleClick = () => {
  alert('I will re-render now.');
  forceUpdate();
};
const [input,setInput]=useState({
  name:"",
  tab:[],
  id:""
})
/*j'ai créer input et input2 qui fonctionne de la meme maniére sauf que le input m'aide à vider la barre de sellection pour une nouvelle chambre*/ 
const [inputb,setInputb]=useState({
  name:"",
  tab:[],
  id:""
})
const handelroom=(event)=>{
const n=event.target.value;
 setInput({
name:n,
tab:[]
 })
 setInputb({
  name:n,
  tab:[]
   })
   forceUpdate()
}
//console.log("input",input);
const addtoroom=()=>{
  if(input.name===""){
    alert("vous n'avez pas selectionner une piéce")
  }
  else{setRoom([...room,inputb]);
    setShowRoom(true)
  forceUpdate()
  }
  if(input.name!=""){
    input.name=""
  }
}
const remoovRoom=(e)=>{
alert('êtes-vous sûr de vouloir supprimer cette piéce?')
const i = room.indexOf(e)
room.splice(i,1)
console.log('room',room)
if(room.length===0){
  console.log('room',room)
  setShowRoom(false)
  forceUpdate()
}
forceUpdate()
}
//console.log("Room",room);
const [input2,setInput2]=useState({
  name:"",
  volume:0,
  prix:0,
  quantite:0
});
/**je vais appliquer le meme raisonnement pour résoudre ce probléme*/
const [input2b,setInput2b]=useState({
  name:"",
  volume:0,
  prix:0,
  quantite:0
});

/*************************************************/
const handelelem=(event)=>{
const n=event.target.value;
setInput2({
 name:n.split(" ")[0],
 volume:n.split(" ")[1],
 prix:n.split(" ")[2],
 quantite:0
})
setInput2b({
 name:n.split(" ")[0],
 volume:n.split(" ")[1],
 prix:n.split(" ")[2],
 quantite:0
})
forceUpdate()
  }
//console.log("input",input2)
const addelem=(e)=>{
  if(input2b.name===""){
    alert('Sélectionnez un objet')
  }else{
    for(let i=0 ; i<room.length;i++){
      if(room.indexOf(e)==i ){
      e["tab"].push(input2)
      input2b.name=""
      forceUpdate();
      console.log("this is the element",e)
    }
    if(input2b.name!=""){
      input2b.name=""
    }
    }
    forceUpdate();
  }
 
  }
  /************************************** */
const qadd=(e,p)=>{
  p.quantite=Number(p.quantite)+1;
  setSommevol(sommevol+Number(p.volume));
  forceUpdate();
}
/******remove element cubage */
const removeItem=(e,p)=>{

  for(let i=0 ; i<room.length;i++){
    if(room.indexOf(e)==room.indexOf(room[i])){
    e["tab"].splice(e["tab"].indexOf(p),1);
  }
  }
  forceUpdate();
}
useEffect(()=>{
  handelCubage(sommevol)
  console.log('le total de mon volume est de',sommevol)
},[(sommevol)])

//console.log("le volume total",sommevol);
/************************************ADD MINUS ELEM CUBAGE******************************/
const [q,setQ]=useState(0);
const qminus=(p)=>{
if(p.quantite==0){
  alert("la quantité est nulle")
}else{
  p.quantite=Number(p.quantite)-1;
  setSommevol(sommevol-Number(p.volume));
  handelCubage(sommevol)
  forceUpdate();
}}
/*************************************LA SOMME DES VOLUMES*****************************/
/*
useEffect(()=>{
 handelCubage(sommevol)
})
*/
const [class_change,setClass_change]=useState('hide-room-datails')
const [class_elem,setClass_elem]=useState()
const showDetails =(e)=>{
  setClass_elem(document.getElementById(room.indexOf(e))) 
  if(!class_elem  || class_elem.className==='hide-room-datails'){
    document.getElementById(room.indexOf(e)).className=('show-room-datails')
   }
  else if(class_elem.className==='show-room-datails'){
    document.getElementById(room.indexOf(e)).className=('hide-room-datails')
    
  }
}
var options = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two' }
];

function logChange(val) {
  console.log('Selected: ', val);
}
return(
<div className="carton">
<h1 className="cartonGeneralTitle" style={{fontSize:"24px"}}>
L'inventaire de votre déménagement</h1>
<div className="wrap-carton-elemnt">
<div className="Total-carton">
{/*<div className="img-carton">
<img src="/images/cubage2.jpg" className="img-carton-size"/>
      </div>*/}

<div className="tail-volum-result ">
  Le volume total:
  </div>
<h3 style={{fontWeight:"600"}}>{sommevol.toFixed(2)}m<sup>3</sup>
</h3>

</div>
<div className="calcul-carton">

<div className="text-carton">
<div>

{/*<div className="text-fomulaire volumDetails">
  <p> 
Listez vos meubles pièce par pièce.
</p>
</div> 

<div className="text-fomulaire volumDetails">
<p>
Attention, ne pas oublier de compter le cabanon de
 jardin, la cave, le garage, le grenier et les cartons
  d'objets posés sur les meubles ou par terre !

</p>
  </div>*/}
</div>


</div>
<div className=' room-btn'>
<div className=" btn-add-room" 
 onClick={addtoroom}>
  <FaPlus className="add-object-icon"/> 
 
  </div>
  
<div className="add-box">
<select className="select-la-piece" name="name" id="select"  value={input.name} onChange={handelroom}>
                <option value="">Ajoutez une pièce</option>
                <option value="🛌 chambre ">Chambre</option>
                <option value="🏡 Jardin ">Jardin</option>
                <option value="🛋️ salon ">Salon</option>
                <option value="🍜 cuisine ">Cuisine</option>
</select>
</div>
</div>
{/*<div className="piecesTitle">
  Les piéces selectionnées :
  </div>
*/}
  <div className='wrap-under-room'>
{room?.map((e)=>
<div className="wrap-room">

 <div className="title-wrap-room">
 <div className='room-name'> {e.name}</div>
 <div className='wrap_btns_room'>
  <div>{room_volum} </div>m3 
   <FaTrash className='delet-room-icon' onClick={()=>remoovRoom(e)}/>
   <FaArrowDown className='delet-room-icon detail-icon' onClick={()=>showDetails(e)}/>
   </div>
   </div> 
   <div className='msg-cache'>voir plus de détails</div>
   <div id={room.indexOf(e)} className="hide-room-datails">
   <div className='wrap-select-object'>
   <div   onClick={()=>addelem(e)} className="btn-add-room btnMApAddRoom btn-ad-ojet">
     { /*<i className="fas fa-plus"></i>*/}
     <FaPlus className='add-object-icon '/> Ajouter un objet
     </div>
<select name="name" className="select-la-piece" value={input2b.name} onChange={(e)=>handelelem(e)} id="select-objet"  >
                <option value={input2.name}>{input2.name}</option>
                <option value="table 1.5 30">Table</option>
                <option value="chaise 0.5 30" >Chaise</option>
                <option value="lit 2  30" >Lit</option>
                <option value="Étagère 0.3  30" >Étagère</option>
                <option value="Armoire 1  30">Armoire</option>
                <option value="Buffet 1  30">Buffet</option>
                <option value="Bureau 1  30">Bureau</option>
                <option value="Cabinet vitrage 1  30">Cabinet vitrage</option>
                <option value="Canapé_2_palces 1  30">Canapé 2 palces</option>
                <option value="Canapé_3_palces 1.5  30">Canapé 3 palces</option>
                <option value="Canapé_d'_angle 3  30">Canapé d'angle</option>
                <option value="Causeuse 0.8  30">Causeuse</option>
                <option value="Chaine_Hi_Fi 0.2  30">Chaine_Hi_Fi</option>
                <option value="Chaise_de_bureau 0.2  30">Chaise de bureau</option>
                <option value="Fauteuil 0.5  30" >Fauteuil</option>
                <option value="Grande_bibliothéque 0.5  30">Grande bibliothéque</option>
                <option value="Guéridon 0.5  30">Guéridon</option>
                <option value="Horloge_sur_pied 0.5  30" >Horloge sur pied</option>
                <option value="Lampadaire 0.2  30" >Lampadaire</option>
                <option value="Lampe_de_table 0.1  30" >Lampe de table</option>
                <option value="Lecteur_DVD 0.1  30" >Lecteur DVD</option>
                <option value="Lustre 0.1  30" >Lustre</option>
                <option value="Meuble_tv 0.5  30" >Meuble TV</option>
                <option value="Ordinateur 0.1  30" >Ordinateur</option>
                <option value="Petite_bibliothèque 0.2  30" >Petite_bibliothèque</option>
                <option value="Placard 1  30" >Placard</option>
                <option value="Four 0.5  30" >Four</option>
                <option value="Gaziniére 0.5  30" >Lecteur DVD</option>
                <option value="Lave_vaisselle 0.5  30" >Lave vaisselle</option>
                <option value="Meuble_haut_cuisine 0.5  30" >Meuble haut cuisine</option>
                <option value="Meuble_bas_cuisine 1  30" >Meuble bas cuisine</option>
                <option value="Micro_onde 0.2  30" >Micro onde</option>
                <option value="Réfrigérateur 1  30" >Réfrigérateur</option>
                <option value="Table_a_4personnes 0.8  30" >Table à 4 personnes</option>
                <option value="Table_a6personnes 1.2  30" >Table à 6 personnes</option>
                <option value="Table_a8personnes 1  30" >Table à 8 personnes</option>
                <option value="Tabouret 0.1  30" >Tabouret</option>
                <option value="Tapis 0.2  30" >Tapis</option>
                <option value="Vaisselier 0.8  30" >Vaisselier</option>
                <option value="Vaisselle 0.2  30" >Vaisselle</option>
                <option value="Machine_a_laver 0.5  30" >Machine à laver</option>
                <option value="Mirroir 0.2  30" >Mirroir</option>
                <option value="Étendoir 0.2  30" >Étendoir</option>
                <option value="Commode 0.6  30" >Commode</option>
                <option value="Dressing_1_porte 0.6  30" >Dressing 1 porte</option>
                <option value="Dressing_2_porte 0.6  30" >Dressing 2 porte</option>
                <option value="Dressing_3_porte 0.6  30" >Dressing 3 porte</option>
                <option value="Dressing_4_porte 0.6  30" >Dressing 4 porte</option>
                
                <option value="Commode 0.6  30" >Commode</option>
                <option value="Commode 0.6  30" >Commode</option>
                <option value="carton_Livre 0.75 30">Carton livre</option>
                <option value="carton_standard 0.1 30">Carton standard</option>
</select>


</div>


  <div className="wrap-elems-room">
    <div className="btns-wrap-room">
      

      
  </div>
      {e.tab?.map((p)=>
      <div className="wrap-btns-cubage-elem">
      <div className="cubage-item-name" >
      <FaTrash className='delet-room-icon' />
       <div className='nom_de_onject'>{p.name}</div> 
        </div>

<div  className="wrap-btn-quantie">
  <div style={{backgroundColor:"lightgray",borderRadius:"5px"}}>
    
      <button  onClick={()=>qadd(e,p)} className="buttonCOntMinus">
      ▴
        </button>
        <button onClick={()=>qminus(p)} className="buttonCOntMinus">
        ▾
      </button>
        </div>
      <div className="cubage-quantite">{p.quantite}</div>
  
</div>
<div className='romontage_demontage_select'>
<select className="select-remontage" name="name" id="select" >
                <option value="">Selectionner</option>
                <option value="">Non</option>
                <option value="">Démontage simple</option>
                <option value="">Démontage/Remontage simple</option>
                <option value="">Démontage complexe</option>
                <option value="">Démontage/Remontage complexe</option>
</select>
</div>
<div className='embalage'>
  <input type="radio"/>
</div>
  </div>)}


</div>
</div>

</div>)}
</div>

</div>


</div>
    </div>)
}
export default Cubage;