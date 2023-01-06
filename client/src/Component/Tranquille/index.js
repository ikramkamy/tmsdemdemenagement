import React from 'react';
import NavBar from '../navBar/NavBar';
import Footer from '../footer/Footer';
import './tranquille.css';
import Select from 'react-select';
import AsyncSelect from 'react-select/async';
const Tranquille=()=>{
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]
      
      function logChange(val) {
        console.log('Selected: ', val);
      }

    return(<div className='autre_formules'>
<NavBar/>
<h1>La formule tranquille</h1>
<h3>Cette page est encours de construction 😌</h3>
        <Select 
         className="basic-single"
         classNamePrefix="select"
         name="color"
        options={options}/>
       
           
<Footer/>
    </div>)
}
export default Tranquille;