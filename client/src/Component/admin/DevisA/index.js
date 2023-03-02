import { FaArrowRight } from 'react-icons/fa';
import './devisa.css'

const DevisA=(props)=>{
    return(<div className="item-admin-inter"> 
    <div className="new-user-itemm">
        <div className='info-user'>
        <div className="elem-user">
        <div  className='elem_user_text'>{props.name}-{props.fname}</div>
        <div  className='elem_user_text Grey'>Type :{props.typedem}</div>
<div  className='elem_user_text Grey'>{props.email}</div>
<div  className='elem_user_text Grey'>+33{props.num}</div>
<div  className='elem_user_text red_price'>{props.total} €</div>
</div>
</div>
<div className='item_devis_style'> Dép: {props.add1}  <br/>Arr: {props.add2}</div>


<div className='item_devis_style'>Télécharger le devis </div>
</div>

    </div>)
}
export default DevisA;