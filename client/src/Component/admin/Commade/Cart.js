
import './cart.css';
const Cart=(props)=>{
 
return(<div className="cart_admin">
    
   
<div className='liste_achat_titres'>
<div className="">{props.name}</div> 
<div className="">{props.quantite}</div>
<div className="">{props.prix}</div>
</div>
<div>La somme: {props.somme}</div>
</div>)
}
export default Cart;