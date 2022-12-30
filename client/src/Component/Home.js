import React, { useState } from 'react'
import './Home.css'
import Trace from '../images/2.png'
import Footer from './footer/Footer'
import Navbar from './navBar/NavBar'
import {Link} from "react-router-dom";
import './animationHome.css';
import {FaArrowRight} from 'react-icons/fa';
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
                    <h2 style={{color:"#2C216F",fontWeight:"500"}}> Personnalisez votre devis en quelques clics
                    avec TMSDEM
                    </h2>
                     
                    <h3>Une équipe de déménageurs expérimentés se chargera de votre déménagement.</h3>
                    
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
             {/*   <p>
                    L’envie de déménager résulte dans 95% des cas d'un désir profond de changement
                    grâce auquel vous pouvez repartir du bon pied à la conquête de nouvelles opportunités pour une vie prospère. 
             </p>*/}
    <h1 className='home_h_text'>TMS-DEM vous aide à faire le premier pas </h1> 
    <h5 className='home_h_text-h5'>en transportant vos affaires en toute sécurité partout en 
    France ou dans les quatres coins du monde.</h5>
    <div className='home_img_text-section'>
<img src='./images/tmshome2.jpg' className='homewall2'/> 

   <div className='home_img_text_section_text'>
   <h1 className='animation_typing'>Un service client<br/>
      24h/24 et 7j/7
</h1>
<h4 >
Nous vous accompagnons avant, pendant et aprés votre déménagement. 
En revanche.
{/*, toute remarque est la bienvenue, 
vous pouvez nous écrire anytime en remplissant le formulaire ci-dessous*/}
</h4>
<Link to="/contact" className='btn_home_imagetext-section'>
    Contactez Nous</Link>
</div>    
    </div>
            </div>
            <div className="textFiled">
            <h1 className='home_h_text'>Nos Formules </h1> 
    <h5 className='home_h_text-h5'>Choisissez la formule qui vous convient.</h5>
    </div>

            <div className="servicesTMSDEM">
                <div className="serviceContent">
                    <div className="serviceContainer">
                    <img src="/images/chrono.png" className="proimg" />
                       <Link to="/chrono"><h2 >Formule Chrono</h2></Link>
                        <div className="imgContent">
                        <p>Besoin de bras en plus
                            ou d’un camion pour
                            transporter vos affaires ?</p>
                        </div>
                    </div>

                    <div className="serviceContainer">
                    <img src="/images/stock.png" className="iconStudent" />
                       <Link to="/stock"><h2> Formule Stock </h2></Link> 
                        <div className="imgContent Studentimgs">
                            
                         <p> TMSDEM vous propose  des solutions 
                         innovantes pour la location de stockage </p>
                        </div>

                    </div>

                    <div className="serviceContainer">
                    <img src="/images/soto.png" className="iconStudent" />
                        <Link to="/tanquille"><h2> Formule Tranquille</h2></Link>
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
    <div className='home_img_text-section'>
    <div className='text_homwall3'>
   <div className='wrap_text_homewall3_backgroundopacity'></div>
    <div className='wrap_text_homewall3'>
   <h2 className='animation_typing'>Avez-vous besois des équipements de démènagement?<br/></h2>
   <h4 style={{color:"#2C216F"}}>Découvrez nos produits et faîtes vos achats en ligne.</h4>
   <Link to="/boutique" className='btn_home_imagetext-section'>Notre Boutique</Link>
     </div>    
    </div>
    <div className='homewall3_wrap'></div>
    </div>

   
            </div>

 <div className='large_home_image' >
<div className='ruban_home'>
<h1>Planifiez Votre
Déménagement Maintenant
</h1>
    <div className='steps'>
        <div className='mstep'>
            <img src="/images/icones/calculator.png" className='stap_img'/>
           <p>Choisissez une de nos <Link to="/services">
            formules</Link> ou calculer votre devis en cliquant  <Link to="/soto"> ici</Link></p> </div>
        <div className='mstep'>
        <img src="/images/icones/validation.png" className='stap_img'/>
        <p>Après avoir validé l’ensemble des informations. cliquez sur <Link to="/services">Envoyer</Link> </p></div>
        <div className='mstep'>
        <img src="/images/icones/printer.png" className='stap_img'/>
           <p>Imprimez votre inventaire, le reste...c'est à nous de le faire 👷‍♂️</p> </div>
    </div>
</div>

</div>

            <div className="reasonsContainer">






</div>
        


            <div className="testimonial">
                <h1> Ils témoignent</h1>

                <div className="slider">
                    <div className="controllButton">
                        <div>
                            <p> / </p>
                        </div>
                    </div>
                    <div className="sliderContent">
                        <div className="stars">

                            <div> <img src={Trace} /></div>
                            <div> <img src={Trace} /></div>
                            <div> <img src={Trace} /></div>
                            <div> <img src={Trace} /></div>
                            <div> <img src={Trace} /></div>


                        </div>

                        <div className="testimonialName">
                            <div className="clientName"> Lina Fakhoury </div>
                        </div>
                        <div className="testimonialText">
                            <div> Surprise très positive! Un service rapide, efficace. Je recommande! </div>

                        </div>
                    </div>

                    <div className="controllButton">
                        <div>
                            <p> / </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer  className="footerComponent"/>
        </div>

    )
}
