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
  const {send_distance,send}=props;
  /** @type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef()
  /** @type React.MutableRefObject<HTMLInputElement> */
  const destiantionRef = useRef()
  const [cout,setCout]=useState(0);
  const[trig,setTrig]=useState(0);
  const handeltrig=()=>{
    setTrigerdistansecal(trigerdistansecal+1)
  }
   async function calculateRoute() {
    if (originRef.current.value === '' || destiantionRef.current.value === '') {
      return
    }
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService()
    const results = await directionsService.route({
      origin: originRef.current.value,
      destination: destiantionRef.current.value,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    })
    setDirectionsResponse(results)
    setDistance(results.routes[0].legs[0].distance.text)
    setDuration(results.routes[0].legs[0].duration.text)
    setTrigerdistansecal(trigerdistansecal+1)
    handeltrig()
   }

  
 function clearRoute() {
    setDirectionsResponse(null)
    setDistance('')
    setDuration('')
    originRef.current.value = ''
    destiantionRef.current.value = ''
    setCout(0)
    /*send(originRef,destiantionRef,distance,duration,cout)*/
   
  }
   const handelChange=()=>{
    setDistance('')
    setDuration('')
    //console.log("after clear",originRef,destiantionRef,distance,duration,cout)
    send(originRef,destiantionRef,distance,"",0)
    setTrigerdistansecal(trigerdistansecal+1)
     }


  useEffect(()=>{
      if (distance) {
        const distanceNumber = parseFloat(distance.split(' ')[0]);
        const newCout = distanceNumber > 50 ? (distanceNumber - 50) * 2 : 0;
        setCout(newCout);
        
        //console.log("originRef, destiantionRef, distance, duration, newCout", originRef, destiantionRef, distance, duration, newCout);
        send(originRef, destiantionRef, distance, duration, newCout);
      } else {
        //console.log('la distance est encour de calcul');
      }
    },[trigerdistansecal])
  
  if (!isLoaded) {
    return(<div>Is loaded!</div>)
  }
  return (
    <div className='wrap_autocomplete' onM={handeltrig}>
   <Autocomplete>
              <input type='text' placeholder='Adresse de départ' ref={originRef} onChange={handelChange}/>
   </Autocomplete>
   <Autocomplete>
              <input
                type='text'
                placeholder="Adresse d'arrivée"
                ref={destiantionRef}
                onChange={handelChange}
              />
    </Autocomplete>
    <div className='wrp_auto-btns'>
    <button colorScheme='pink' type='submit' 
    onClick={calculateRoute} className="btn_autocomplete">
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