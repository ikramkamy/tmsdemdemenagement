import React, { useState } from 'react'
import './Home.css'
import Footer from '../footer/Footer'
import Navbar from '../navBar/NavBar'
import {Link} from "react-router-dom";
import './animationHome.css';
import {FaArrowRight} from 'react-icons/fa';
import Carous from '../CarouselH'
export default function Home() {
const [isScrollActive,setIsScrollActive]=useState(false)
  /*
  const handelscroll=(e)=> {
   setIsScrollActive(!isScrollActive)
   console.log(e)
   console.log('we are scrolling')
    }
*/
    return (

    
        <div className="Home" >
              <Navbar />  

            <div className="slideImage" >
            
            <div className='wrap_title_home'>
            <div className="titleSlideopacityBack"> </div> 
            <div className="titleSlide">
                    <h2 style={{color:"#2C216F",fontWeight:"500"}}>
                         Personnalisez votre devis en quelques clics
                    avec TMSDEM
                    </h2>
                     
                    <h3>
        Une équipe de déménageurs expérimentés se chargera de votre déménagement.</h3>
                    
                    <h4 className='home-devis-btn'>
                Personnalisez votre devis
             <FaArrowRight className='home-arrow-devis' />
           </h4> 
                </div>
                
            {/* <img src="./images/nousgif.gif" className='homeimg'
              alt="nous nous occupons de votre déménamegement"/>*/}

        
             </div>

{/*<img src='./images/homewall.webp' className='homewall'/>
<img src='./images/moving.webp' className='homewall stephomewall'/>*/}
             </div>
             <div className="textFiled">
            <h1 className='home_h_text'>Nos Formules </h1> 
    <h5 className='home_h_text-h5'>Choisissez la formule qui vous convient.</h5>
    </div>

            <div className="servicesTMSDEM">
                <div className="serviceContent">
                    <div className="serviceContainer">
                    <img src="/images/chrono.png" className="proimg" alt='la formule de déménagement' />
                       <Link to="/chrono"><h2 >Formule Chrono</h2></Link>
                        <div className="imgContent">
                        <p>Besoin de bras en plus
                            ou d’un camion pour
                            transporter vos affaires ?</p>
                        </div>
                    </div>

                    <div className="serviceContainer">
                    <img src="/images/stock.png" className="iconStudent" alt="déménagement photo"/>
                       <Link to="/stock"><h2> Formule Stock </h2></Link> 
                        <div className="imgContent Studentimgs">
                            
                         <p> TMSDEM vous propose  des solutions 
                         innovantes pour la location de stockage </p>
                        </div>

                    </div>

                    <div className="serviceContainer">
                    <img src="/images/soto.png" className="iconStudent" alt='déménagement photo' />
                        <Link to="/tranquille"><h2> Formule Tranquille</h2></Link>
                        <div className="imgContent Studentimgs">
                         <p>Nous nous occupons nous même de toute la procédure de déménagement</p>
                        </div>

                    </div>
                </div>
            </div>
            <div className="textFiled">
             {/*   <p>
                    L’envie de déménager résulte dans 95% des cas d'un désir profond de changement
                    grâce auquel vous pouvez repartir du bon pied à la conquête de nouvelles opportunités pour une vie prospère. 
             </p>*/}
    <h1 className='home_h_text'>TMS-DEM vous aide à faire le premier pas </h1> 
    <h5 className='home_h_text-h5'>en transportant vos affaires en toute sécurité partout en 
    France ou dans les quatres coins du monde.</h5>
    <div className='home_img_text-section'>
<img src='./images/tmshome2.jpg' className='homewall2' alt="déménagement TMDEM"/> 

   <div className='home_img_text_section_text'>
   <h1 className='animation_typing'>Un service client<br/>
    24h/24 et 7j/7</h1>
<h4 >
Nous vous accompagnons avant, pendant et après votre déménagement. 

</h4>
    <div className='btn_service'>
    <Link to="/contact">Contactez Nous</Link>
    </div>
</div>    
    </div>
            </div>
          
<div className="textFiled">
            
    <div className='home_img_text-section'>
    

    <div className='text_homwall3'>
    <div className='wrap_text_homewall3'>
   <h2 className='animation_typing'>
    Avez-vous besoin des équipements de déménagement?</h2>
   <h4>Découvrez nos produits et faîtes vos achats en ligne.</h4>
   <div className='btn_service'>
    <Link to="/boutique">Notre Boutique </Link>
    </div>
     </div>    
    </div>
 <img src='./images/siteonlaptop3.png' className='homewall2' alt="démènagement TMDEM"/>
  </div>
  {/*<div className='home_img_text-section'>
    
  <img src='./images/siteonphone.png' className='homewall2'
  alt="démènagement TMDEM"/>
    <div className='text_homwall3'>
    <div className='wrap_text_homewall3'>
   <h2 className='animation_typing'>
    Avez-vous besoin des équipements de déménagement?</h2>
   <h4>Découvrez nos produits et faîtes vos achats en ligne.</h4>
   <div className='wrap_toboutique_btn'>
   <Link to="/boutique" className='btn_home_imagetext-section'>
    Notre Boutique</Link>
    </div>
     </div>    
    </div>
 
            </div>*/}

   
            </div>

 <div className='large_home_image' >
<div className='ruban_home'>
<h1>Planifiez Votre
Déménagement Maintenant
</h1>
    <div className='steps'>
        <div className='mstep'>
            <img src="/images/icones/calculator.png" className='stap_img' alt='démégement TMSDEM'/>
           <p>Choisissez une de nos <Link to="/services">
            formules</Link> ou bien calculez votre devis en cliquant  <Link to="/soto"> ici</Link></p> </div>
        <div className='mstep'>
        <img src="/images/icones/validation.png" className='stap_img' alt='déménagement TMSDEM'/>
        <p>Après avoir validé l’ensemble des informations. cliquez sur <Link to="/services">Envoyer</Link> </p></div>
        <div className='mstep'>
        <img src="/images/icones/printer.png" className='stap_img' alt='déménagement TMSDEM'/>
           <p>Imprimez votre inventaire, le reste...c'est à nous de le faire 👷‍♂️</p> </div>
    </div>
</div>

</div>

            <div className="reasonsContainer">





</div>
        <Carous/>


           

            <Footer  className="footerComponent"/>
        </div>

    )
}
