import React from 'react'
import './Service.css'
import Footer from '../footer/Footer';
import {Link} from 'react-router-dom'
import NavBar from '../navBar/NavBar';
import './service_style.css';
import {FaArrowAltCircleUp, FaArrowLeft, FaArrowRight, FaArrowsAlt} from 'react-icons/fa';
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
    <p>Vos meubles sont précieux?<br/>
        Nous assurons l'emballage des meubles soigneusement </p><FaArrowRight  className='icon_service'/>
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
    <h3 className=''>
     Choisissez l'une de ces formules</h3>
     <div className='formules_services'>
        <div><Link to="/chrono">Chrono</Link></div>
        <div><Link to="/tranquille">Tranquille</Link></div>
        <div><Link to="/stock">Stock</Link></div>
        <div><Link to="/soto">Soto</Link></div>
     </div>
     </div>

<div className="monteMeubleContainer">

<div className="monteMeubleText">
<h1> Monte-meuble</h1>
<div className="monteMeubleTextDescription">
<p>



À cause du poids ou des  dimensions de certains meubles,
nous utilisons un monte meuble qui facilite le transport de ses derniers vers la navette, sans avoir à passer  par l’escalier ni par l’ascenseur.

Notre équipe est hautement qualifiée pour mener l’opération de levage en toute sécurité  afin d’éviter tous risques de chute.

Vous pouvez toutefois louer nos  monte-meubles dans le cas d’un usage personnel.

</p>

</div>
</div>

<div className="monteMeubleImg">
image here
</div>


</div>









            <div className="actionContainer">
                <div className="actionContainerItem">
                    <h1> Je déménage</h1>
                </div>
                <div className="actionContainerItem">
                    <h2> mais j'ai besoin de cartons</h2>
                </div>
                <div className="actionContainerItem buttonShop">

               
                    <button ><Link to="/e-commerce">SHOP</Link> </button>
                
                </div>
            </div>

            <Footer />
        </div>
    )
}
