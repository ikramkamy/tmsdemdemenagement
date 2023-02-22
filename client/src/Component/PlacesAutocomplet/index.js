import React, { useEffect } from 'react'
import {  useJsApiLoader,Autocomplete} from '@react-google-maps/api';
import { useRef, useState } from 'react';
import './autocomplete.css';
const  MyComponent=(props) =>{
 
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyB-TFg4nT_8t9NN-4otAr1dWVqXcGyIG4o',
    libraries: ['places'],
  })

  const [map, setMap] = useState(/** @type google.maps.Map */ (null))
  const [directionsResponse, setDirectionsResponse] = useState(null)
  const [distance, setDistance] = useState('')
  const [duration, setDuration] = useState('')
  const [trigerdistansecal,setTrigerdistansecal]=useState(0)
  const {send_distance}=props;
  /** @type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef()
  /** @type React.MutableRefObject<HTMLInputElement> */
  const destiantionRef = useRef()
 /*
  useEffect(()=>{
    send_distance(distance,duration,originRef,destiantionRef)
    console.log("we are sending values from autocomplete componenet",originRef )
    })
    */
   
    
  if (!isLoaded) {
    return <div className='isloaded'>is loaded</div>
  }

  async function calculateRoute() {
    if (originRef.current.value === '' || destiantionRef.current.value === '') {
      return
    }
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService()
    localStorage.setItem('originref',originRef.current.value)
    localStorage.setItem('destination',destiantionRef.current.value)
    localStorage.setItem('distance',distance)
    localStorage.setItem('duration',duration)
    const results = await directionsService.route({
      origin: originRef.current.value,
      destination: destiantionRef.current.value,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    })
    setDirectionsResponse(results)
    setDistance(results.routes[0].legs[0].distance.text)
    setDuration(results.routes[0].legs[0].duration.text)
    send_distance(distance,duration)
  }

  function clearRoute() {
    setDirectionsResponse(null)
    setDistance('')
    setDuration('')
    originRef.current.value = ''
    destiantionRef.current.value = ''
    localStorage.removeItem('originref')
    localStorage.removeItem('destination')
    localStorage.removeItem('distance')
    localStorage.removeItem('duration')
  }
 

  return (
    <div className='wrap_autocomplete'>
   <Autocomplete>
              <input type='text' placeholder='Adresse de départ' ref={originRef} />
   </Autocomplete>
   <Autocomplete>
              <input
                type='text'
                placeholder="Adresse d'arrivée"
                ref={destiantionRef}
              />
    </Autocomplete>
    <div className='wrp_auto-btns'>
    <button colorScheme='pink' type='submit' onClick={calculateRoute} className="btn_autocomplete">
              Calculer la distance
            </button>
            <div
            className='refreshadress_btn'
              aria-label='center back'
              
              onClick={clearRoute}
            ><img src="./images/icones/refresh.png" className='icon_refresh'/>
            <div className='note_refresh_adress'>Effacer les adresses et recalculer la distance et la durée</div>
            </div>
            
            </div>
             <div className='info_adresse'>Distance:<span>{distance}</span> <p>
             Dans le cas où la distance excéderait les 50 kilomètres, 
             une tarification serait applicable.</p> </div>
          <div className='info_adresse'>Durée: <span>{duration}</span> </div>
   </div>
  ) 
}

export default MyComponent;