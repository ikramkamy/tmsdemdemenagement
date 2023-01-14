import React, { useEffect, useState } from 'react';
import './comment.css';
import './dialoguebox.css';
export const Comment_details=()=>{

    return(<div className='comment'>
Voir les détails de la piéce

    </div>)
}
export const Comment_details2=()=>{

    return(<div className='comment2'>
Supprimer  cette piéce

    </div>)
}
export const Comment_details3=()=>{

    return(<div className='comment3'>
Ajouter un élèment de cubage

    </div>)
}
export const Comment_details4=()=>{

    return(<div className='comment4'>
Ajouter un commentaire

    </div>)
}
export const Comment_details5=()=>{

    return(<div className='comment5'>
Si cet objet a besoin d'emballage

    </div>)
}

export const Comment_Objet_Dialoguebox=(props)=>{
const {closeDialogueBox, SaveComment,sendComment_obj}=props;
const [comment_obj,setComment_obj]=useState('');
const handelComment_object=(e)=>{
    setComment_obj(e.target.value);
}
useEffect(()=>{
    sendComment_obj(comment_obj)   
    console.log("comment obj",comment_obj)
},[comment_obj])
    return(<div className='wrap_dialoguebox'>
    <div className='Dialogue_box'>
     <h1> Information complémentaire </h1>
     <h5> Ajoutez une remarque </h5>
     <input type='text'  placeholder='Notre.....' value={comment_obj} onChange={(e)=>handelComment_object(e)}/>
     <div className='btn_dialoguebox'>
        <button onClick={closeDialogueBox}>Annuler</button>
        <span style={{width:"5px"}}></span>
        <button onClick={SaveComment}>Enregistrer</button>
     </div>
     </div>
    </div>)
}
