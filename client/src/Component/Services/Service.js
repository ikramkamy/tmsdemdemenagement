import React from 'react'
import './Service.css'
import Footer from '../footer/Footer';
import {Link} from 'react-router-dom'
import NavBar from '../navBar/NavBar';
import './service_style.css';
import { FaArrowLeft, FaArrowRight} from 'react-icons/fa';
export default function Service() {
    return (
        <div className="">
<NavBar/>
            <div className="titleContainer">
            <h1>TMSDEM SERVICES</h1>
            <h2> Déménagez en toute tranquilité </h2>
            </div>
            
               
 <div className='Service_Content'>
    <h1>Services TMSDEM</h1>
    <p className="Service_text">
        Nous assurons le déménagement local et 
        national de particuliers et de professionnels,
         avec des camions de différents volumes.
          Nous vendons des fournitures d'emballage comme des cartons,
           des housses et des couvertures, nous assurons la location
            de véhicules et de monte-meubles avec technicien et chauffeur. 
            Devis et visites gratuits. Travail sérieux et soigné. 
            Nous proposons des services de garde-meubles,
             de transports urgents de toutes
         distances et de toutes livraisons et diverses manutentions.</p>
         <div className='btn_service'>
    <Link to="/contact">Contactez Nous</Link>
    </div>
    <div className='image_text_service'>
    <img src='/images/pic.jpg' className='img_service_wall'/>
    <FaArrowLeft className='icon_service'/><p>Vos meubles sont précieux?<br/>
        Nous assurons l'emballage des meubles soigneusement </p>
    </div>  
    <div className='image_text_service'>
    <p>Vous cherchez une formule économique ou une prise en charche totale?<br/>
        On vous propose plusieurs <a href='#formules'>formules</a>  </p><FaArrowRight  className='icon_service'/>
        <img src='/images/wall5.jpg' className='img_service_wall'/>
    </div>
    <div className='image_text_service'>
    <img src='/images/Monte-meuble.jpg' className='img_service_wall'/>
    <FaArrowLeft  className='icon_service'/>
    <p>Vous déménagez en haut d’un immeuble?<br/>
    TMSDEM vous propose un service de
     <Link to="/chrono">location</Link> d'un monte-meuble. </p>
        
    </div> 
    <div className='image_text_service'>
   <p>Location camion déménagement 🚛<br/>
   TMSDEM vous propose un service de location de camion de déménagement</p><FaArrowRight className='icon_service'/>
        <img src='/images/hometms.jpg' className='img_service_wall'/>
        
    </div> 
    <h3 className='' id="formules">
     Choisissez l'une de ces formules</h3>
     <div className='formules_services'>
        <div className='wrap_formule_item'>
        <Link className='fromule_item_style' to="/chrono">Chrono</Link>
        <div className='formule_item_text'>Chrono vous permet de louer:
            <ul>
                <li><img src="/images/icones/check-mark.png"/>Un camion </li>
                <li><img src="/images/icones/check-mark.png"/>Un monte-meuble</li>
                
            </ul>
            ou bien demadez l'aide d'une ou plusieurs personnes
        </div>
        </div>
        <div  className='wrap_formule_item'>
            <Link   className='fromule_item_style' to="/tranquille">Tranquille</Link>
            <div className='formule_item_text'>TMSDEM vous propose un démégement complet:
            <ul>
                <li><img src="/images/icones/check-mark.png"/>Une équipe sera mobilisée</li>
                <li><img src="/images/icones/check-mark.png"/>Prise en charge totale du déménagement </li>
                
            </ul>
         
        </div>
            </div>
        <div className='wrap_formule_item'>
            <Link  className='fromule_item_style'  to="/stock">Stock</Link>
            <div className='formule_item_text'>TMSDEM vous propose un service de stockage:
            <ul>
                <li><img src="/images/icones/check-mark.png"/>Découvrez notre formule 'stock'</li>
                <li><img src="/images/icones/check-mark.png"/> Plusieurs solutions de stockage sont disponibles </li>
                
            </ul>
         
        </div>
            </div>
        <div className='wrap_formule_item'>
            <Link className='fromule_item_style'  to="/soto">Soto</Link>
            <div className='formule_item_text'>Personnalisez vous même votre devis:
            <ul>
                <li><img src="/images/icones/check-mark.png"/>Précisez tout les détails 
                de votre déménagement</li>
                <li><img src="/images/icones/check-mark.png"/>Imprimez votre devis</li>
                
            </ul>
         
        </div>
            
            </div>
     </div>
     </div>



            <Footer />
        </div>
    )
}
