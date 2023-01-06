import React from 'react'
import './Presentation.css'
import Footer from '../footer/Footer';
import NavBar from '../navBar/NavBar';
import {Link} from 'react-router-dom'
export default function Presentation() {
    return (
        <div className="presentation">
            <NavBar/>
            <div className="tmsdem_title"><h1>TMSDEM TEAM </h1> 
            <h2 > Authenticité,Ponctualité,Responsabilité
             </h2>
            </div>
            
            <div className="presentationContainer">
              
                <div className="presentationText">
                   <h2 style={{color:"#2C216F"}}>Qui sommes-nous?</h2>
                    <p> Comptant, plus de 7 ans d’expérience dans le secteur du déménagement, l’équipe TMS-DEM propose ses services sur toutes les régions de France. </p>


                    <p> Durant toutes ces années de travail, nous avons honorés nos engagements envers des milliers de clients en terme de qualité de travail, de ponctualité et de responsabilité.</p>

                    <p>
                    Nous possédons notre propre équipe de déménageurs et nous sommes dotés d’un matériel de déménagement sophistiqué pour transporter vos affaires quelques soit l’endroit où vous habitez.
                    </p>


                    <p className="para">
                        Nos tarifs s’adaptent à tous les budgets, allant d’étudiants jusqu’aux professionnels. Ceci dit, quelques soit le statut de nos clients, nous nous assurons qu’ils bénéficient tous de la même qualité de service.
                    </p>
                </div>
            </div>


            <div className='btn_service'>
    <Link to="/contact">Contactez Nous</Link>
    </div>

          
<Footer />

        </div>
    )
}
