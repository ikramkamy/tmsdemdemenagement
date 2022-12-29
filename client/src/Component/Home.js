import React, { useState } from 'react'
import './Home.css'
import Pro from '../images/icons/1.png'
import Etudiant from '../images/icons/2.png'
import Camion from '../images/icons/3.png'
import Avion from '../images/icons/4.png'
import PlanificationTimeLine from '../images/planificationTimeLine.png'
import Icon_Plan from '../images/icon_Plan de travail 1.png'
import Trace from '../images/2.png'
import Step2 from '../images/step2.png'
import Step3 from '../images/step3.png'
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


            <div className='large_home_image' >
<div>
<h1></h1>
    
</div>

</div>

            <div className="reasonsContainer">

<div className="reasonsContainerTitle">
    <div className={`${isScrollActive ? "numberReasons animation_one" : "numberReasons"}`} id="animone">
        3
    </div>
    <div className="rowTitleReasonContainer">
        <h1 className={`${isScrollActive ? "animation_two" : ""}`}> raisons</h1>
        <h2 className={`${isScrollActive ? "animation_three" : ""}`}> pour nous choisir</h2>
    </div>
</div>


<div className="reasonContent">

    <div className="reasonItem">
        <h1> Authenticité </h1>
        <div className="reasonItemPara"> <p> Nous ne sous traitons pas,
            nous possédons notre propre équipe
            de déméngeurs  </p> </div>
    </div>

    <div className="reasonItem">
        <h1> Responsabilité </h1>
        <div className="reasonItemPara"> <p>
            Vos affaires arriverons chez vous, en toute
            sécurité et sans aucun oubli. </p> </div>
    </div>

    <div className="reasonItem troisieme">
        <h1> Ponctualité</h1>
        <div className="reasonItemPara"> <p>
            Nous nous
            présenterons le jour
            J chez vous
            à l’heure convenue </p> </div>
    </div>
</div>

</div>
        









            <div className="planificationStep">
                <div className="planificationTitle">

                  <div>  <h1> Planifiez Votre</h1>
                    <h2> Déménagement Maintenant </h2>
                    </div>
                </div>
            </div>






            <div className="planificationTimeLine" id="#planificationTimeLine">

                <div className="planificationLeftSide">
                    <img src={PlanificationTimeLine} />

                    <div className="buttonBox">
                        <div>  Je déménage  </div>
                    </div>
                </div>


                <div className="planificationRightSide">
                    <div className="step">

                        <div className="descriptionPlanification">
                            <div> Personnalisez en quelques clics votre déménagement</div>
                        </div>

                        <div className="illustration">
                            <div> <img src={Icon_Plan} /> </div>
                        </div>

                    </div>

                    <div className="step">

                        <div className="descriptionPlanification">
                            <div> Précisez la date et l’heure qui vous conviennent</div>
                        </div>

                        <div className="illustration">
                            <div> <img src={Step2} /> </div>
                        </div>


                    </div>
                    <div className="step">


                        <div className="descriptionPlanification text3">
                            <div>  Jour J : nos déménageurs seront en place pour transporter vos affaires jusqu’à votre nouvelle déstination</div>
                        </div>

                        <div className="illustration">
                            <div> <img src={Step3} /> </div>
                        </div>


                    </div>
                </div>
            </div>


            <div className="buttonAction">

                <div className="button">
                    <button className="btn-devis btn-homepage"><Link to="/boutique" > Boutique </Link> </button>
                </div>

                <div className="button">
                    <button className='btn-devis btn-homepage2'><Link to="/boutique">Location espace stockage </Link> </button>
                </div>

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
