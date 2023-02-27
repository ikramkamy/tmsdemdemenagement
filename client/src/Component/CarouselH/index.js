import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { test } from './testlist';
import TesmItem from './TesItem';
import './testem.css';

const Carous =()=>{
const[list,setList]=useState([{
    auteur:"Marie Claude Grillot",
    text:"Personnel très compétent et très aimable.Bon rapport qualité de prix",
    stars:5
}]);
const[count,setCount]=useState(0);
const nextTemoignage=()=>{
       setList([test[count]])
       
        setCount(count+1)
       if(count===(test.length-1)){
        setCount(0)
       }

}

return(<div className='testimonial'>
<h2 style={{color:"white"}}> Ils témoignent</h2>
<div className='wrap_testemonial'>

{list?.map((e)=><TesmItem  auteur={e.auteur} text={e.text}
 stars={e.stars}  key={e.auteur} nextTemoignage={nextTemoignage}/>)}

<img src='./images/testem11.webp' className='testem_wall'/>
</div>              
             
<h2> <Link to="/soto" style={{color:"white"}}>Je déménage </Link></h2>      
</div>)
}
export default Carous;