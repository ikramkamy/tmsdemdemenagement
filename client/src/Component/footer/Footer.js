import React from 'react'
import './Footer.css'
import Phone from '../../images/Groupe 136.png'
import SAV from '../../images/Groupe 138.png'
import LogoTMSDEM from '../../images/tmsdemfooterlogo.png'

export default function Footer() {
    return (
        <div className="footer">
            <div className="footerleft">

<div  className="tmsdemlogo"> 

<iframe 
src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10509.6394254878!2d2.5301712!3d48.8122409!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe002b9238fd0c503!2sTMS%20DEM!5e0!3m2!1sen!2sdz!4v1672723548789!5m2!1sen!2sdz" 
 allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='map_footer'></iframe>
</div>


                <div className="footerposition">
                    <div className="footerIcones"> <i className="fas fa-map-marker-alt"></i></div>
                    <div className="addressText"> 300 A Rue Marcel Paul, <section>94500 Champigny-sur-Marne, France </section></div>
                </div>

                <div className="footernumber">
                    <div className="footerIcones"> <img src={Phone} className="phone" /> </div>
                    <div className="addressText telTextFooter"> +33 1 41 77 11 32</div>
                </div>


                <div className="footeremail">
                    <div className="footerIcones"> <i className="fas fa-envelope"></i> </div>
                    <div className="addressText contacttextFooter"> contact@tms-dem.fr </div>
                </div>


                <div className="footerclientservice">
                    <div className="footerIcones"> <img src={SAV} className="sav" /> </div>
                    <div className="addressText clientSAVFooter"> Service client 7j/7</div>
                </div>

            </div>
       
        </div>
    )
}
