import React, { useEffect, useState } from 'react'
import './Home.css'
import Pro from '../images/icons/1.png'
import Etudiant from '../images/icons/2.png'
import Camion from '../images/icons/3.png'
import ImgSlide from '../images/image1.png'
import Avion from '../images/icons/4.png'
import PlanificationTimeLine from '../images/planificationTimeLine.png'
import TmsDemImage from '../images/tmsdemPicture.png'
import Icon_Plan from '../images/icon_Plan de travail 1.png'
import Trace from '../images/2.png'
import Step2 from '../images/step2.png'
import Step3 from '../images/step3.png'
import Footer from './footer/Footer'
import Nav from './navBar/NavBar'
import {Link} from "react-router-dom";
import './animationHome.css';
export default function Home() {
  const [isScrollActive,setIsScrollActive]=useState(false)
  const handelscroll=(e)=> {
   setIsScrollActive(!isScrollActive)
   console.log(e)
   console.log('we are scrolling')
    }
    /*
   useEffect(()=>{
  window.addEventListener('scroll', handelscroll);
  console.log('we are scrolling')
})
*/
    return (

    
        <div className="Home" >
              <Nav />  
           {/* <div className="smallImg">
                <img src={TmsDemImage} />
    </div>*/}
            <div className="slideImage">
            <div className="titleSlide">
                    <h1> Nous nous <span className="occupons"> occupons </span></h1>
                    <h2> nous même de votre </h2>
                    <h3> déménagement</h3>
               
                </div>
             {/*<img src={ImgSlide}/>*/}

               



            </div>



            <div className="textFiled">
                <p>
                    L’envie de déménager résulte dans 95% des cas d'un désir profond de changement
                    grâce auquel vous pouvez repartir du bon pied à la conquête de nouvelles opportunités pour une vie prospère. TMS-DEM vous aide à faire le premier pas en transportant vos affaires en toute sécurité partout en France ou dans les quatres coins du monde.

                </p>
            </div>



            <div className="servicesTMSDEM">
                <div className="serviceContent">
                    <div className="serviceContainer">
                       <h2 className="titleDemenagementPro"> Déménagement PRO</h2>
                        <div className="imgContent">
                            <img src={Pro} className="proimg" />
                        </div>
                    </div>

                    <div className="serviceContainer">

                        <h2> Déménagement
                            Étudiant </h2>
                        <div className="imgContent Studentimgs">
                            <img src={Etudiant} className="iconStudent" />
                        </div>

                    </div>

                    <div className="serviceContainer">

                        <h2> Déménagement
                            longue distance </h2>
                        <div className="imgContent Studentimgs">
                            <img src={Camion} className="iconStudent" />
                        </div>


                    </div>

                    <div className="serviceContainer">
                        <h2> Déménagement
                            international</h2>
                        <div className="imgContent Studentimgs">
                            <img src={Avion} className="iconStudent" />
                        </div>

                    </div>
                </div>
            </div>




            <div className="reasonsContainer" onScroll={(e)=>handelscroll(e)}>

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
