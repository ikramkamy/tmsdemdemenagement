import React from 'react'
import './Service.css'
import Serviceimg from '../images/servicePicture.jpeg';
import Footer from './footer/Footer';
import {Link} from 'react-router-dom'
import MonteMeuble from '../images/monteMeuble.jpeg';
import NavBar from './navBar/NavBar';
export default function Service() {
    return (
        <div className="serviceContainer">
<NavBar/>
            <div className="titleContainer"> <h1> Déménagez en toute tranquilité  </h1></div>
            {
               <div className="pictureTmsDem">
               <img src={Serviceimg} />
             
             <div className="textSlide">  <h1> Vos affaires chez vous en toute sécurité <section className="sectionTextSlideTitle"> sans aucun risque de casse ou d'oubli</section></h1></div>
               </div>
               
            }


            <div className="servceDetails">
                <div className="serviceDetailsTitle">
                    <h1> Choisissez la formule </h1>
                    <h2>de déménagement qui vous convient</h2>
                </div>


                <div className="servceDetailsServices">

                    <div className="serviceItem">
                        <h3 className="offreSotoServiceItem"> Offre Soto</h3>
                        <div className="paraserviceItem offresotoPara"> <p>
                            Vous voulez déménager
                            sans vous  préoccuper
                            du process ? </p></div>

                        <div className="buttoncontainer  soto">
                        <Link to="/soto">laissez-nous faire</Link> </div>
                    </div>


                    <div className="serviceItem">

                        <h3> Offre Chrono </h3>
                        <div className="paraserviceItem"> <p>
                            Besoin de bras en plus
                            ou d’un camion pour
                            transporter vos affaires ?  </p></div>

                        <div className="buttoncontainer soto organise">
                            
                     <Link to="/chrono">J'organise mon déménagement</Link> </div>
                    </div>
                    <div className="serviceItem">


                        <h3> Offre Stock </h3>
                        <div className="paraserviceItem"> <p>
                            Besoin de bras en plus
                            ou d’un camion pour
                            transporter vos affaires ?  </p></div>

                        <div className="buttoncontainer stock">
                        <Link to="/">Je stock chez vous</Link> </div>
                    </div>
                </div>
            </div>

{/*

            <div className="reasonsContainer">

                <div className="reasonsContainerTitle">
                    <div className="numberReasons">
                        3
                    </div>
                    <div className="rowTitleReasonContainer">
                        <h1> raisons</h1>
                        <h2> pour nous choisir</h2>
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
*/
}

<div className="monteMeubleContainer">

<div className="monteMeubleText">
<h1> Monte-meuble</h1>
<div className="monteMeubleTextDescription">
<p>



À cause du poids ou des  dimensions de certains meubles, nous utilisons un monte meuble qui facilite le transport de ses derniers vers la navette, sans avoir à passer  par l’escalier ni par l’ascenseur.

Notre équipe est hautement qualifiée pour mener l’opération de levage en toute sécurité  afin d’éviter tous risques de chute.

Vous pouvez toutefois louer nos  monte-meubles dans le cas d’un usage personnel.

</p>
</div>
</div>

<div className="monteMeubleImg">
<img src={MonteMeuble} />
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
