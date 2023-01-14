import React, { useEffect, useState } from 'react';
import NavBar from '../navBar/NavBar';
import Footer from '../footer/Footer';
import './tranquille.css';
import './googleplace.css';
import Select from 'react-select';
import { OptionList } from './OptionList';
import CreatableSelect from 'react-select/creatable';
import PlacesAutocomplete,{
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from 'react-places-autocomplete';

const Tranquille=()=>{
 const [address,setAddress]=useState();
 const [coordinate,setCoordinate]=useState({
  lat:null,
  long:null
 })
 const handleSelect=async value=>{
  const results= await geocodeByAddress(value);
  const ll = await getLatLng(results[0]);
  console.log(ll)
 }
useEffect(()=>{
  handleSelect()
})
      function logChange(val) {
        console.log('Selected: ', val);
      }

    return(<div className='autre_formules'>
<NavBar/>
<h1>La formule tranquille</h1>
<h3>Cette page est encours de construction 😌</h3>
<input />


     {/*   <Select 
         className="basic-single"
         classNamePrefix="select"
         name="color"
        options={OptionList}/>
    <CreatableSelect isClearable options={OptionList} />    */}
           
<Footer/>
    </div>)
}
export default Tranquille;