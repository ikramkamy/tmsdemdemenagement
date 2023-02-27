import './devisa.css'

const DevisA=(props)=>{
    return(<div className="item-admin-inter"> 
    <div className="new-user-itemm">
        <div className='info-user'>
        <div className="elem-user">
        <div  className='elem_user_text'>{props.name}-{props.fname}</div>
<div  className='elem_user_text'>{props.email}</div>
<div  className='elem_user_text'>{props.total}</div>
</div>
</div>
</div>
    </div>)
}
export default DevisA;