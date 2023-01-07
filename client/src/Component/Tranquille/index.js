import React from 'react';
import NavBar from '../navBar/NavBar';
import Footer from '../footer/Footer';
import './tranquille.css';
import Select from 'react-select';
import { OptionList } from './OptionList';
import CreatableSelect from 'react-select/creatable';
const Tranquille=()=>{
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
        options={OptionList}/>
   <CreatableSelect isClearable options={OptionList} />    
           
<Footer/>
    </div>)
}
export default Tranquille;