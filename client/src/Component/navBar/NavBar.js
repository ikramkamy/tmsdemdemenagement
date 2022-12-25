import React from 'react'
import './NavBar.css'
import Logo from '../../images/logo-01.png';
import {useState} from 'react'
import Phone from '../../images/icons_Plan_de_travail_1.png'
import Email from '../../images/Groupe 205.png'
import SAV from '../../images/icons-02.png'
import Cursor from '../../images/1.png';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function NavBar() {
  const [fade, setFade] = useState(false);
  const clickOpenburgerMenu = () => {setFade(!fade)}
  return (
      <div className="Nav">
        <div className="navTop"> 
    <div className="logoContainer">
  <img src={Logo} />
   </div>
   <div className="navItem"> 

<div className="item"><Link to="/">Accueil</Link> </div>

<div className="item"><Link to="/presentation" style={{"textDecoration" : "none"}}>TMS-DEM</Link></div>
<div className="item"><Link to="/services">Nos services</Link>  </div>
<div className="item"><Link to="/boutique">Boutique</Link> </div>
<div className="item"><Link to="/contact">Contact</Link>  </div>



</div>
   <div className='wrap-elem-topnav'>

<div className="navitemTop"> 
<div><img src={Phone} className="phonetopNav"/></div>
<div className="navText"> +33 1 41 77 11 32</div>
</div>
<div className="btn-devis largeMenu">
<Link to="/soto">Demander un devis</Link>
</div>
</div>
</div>

 <div className="navContainer">

 <div onClick={() => clickOpenburgerMenu()} className="burger-boutton"><i className="fas fa-bars"></i>

</div>
 </div>
{fade && <div className="navSmallScreen">

<div className="item"><Link to="/"   style={{"textDecoration" : "none", "color":"black", "fontSize":"1.1em"}}>Accueil</Link> </div>
<div className="item"><Link to="/presentation" style={{"textDecoration" : "none", "color":"black", "fontSize":"1.1em"}}>TMS-DEM</Link></div>
<div className="item"><Link to="/services"  style={{"textDecoration" : "none", "color":"black", "fontSize":"1.1em"}}>Nos services</Link>  </div>
<div className="item"><Link to="/boutique"  style={{"textDecoration" : "none", "color":"black", "fontSize":"1.1em"}}>Boutique</Link> </div>
<div className="item"><Link to="/contact"  style={{"textDecoration" : "none", "color":"black", "fontSize":"1.1em"}}>Contact</Link>  </div>
<div className="btn-devis">

</div>

<div className="itemContainerInfo"> 
<div className="item emailAdress">   contact@tms-dem.com </div>
<div className="item gps">   GPS </div>
</div>
   </div>

}
  </div>
    )
}
