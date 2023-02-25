import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router,Switch, Route} from "react-router-dom";
import Formulefinale from './Component/Formulaire/Formule';
import NavFomule from './Component/navFomule';
import Home from './Component/Home/Home'
import NavBar from './Component/navBar/NavBar';
import Presentation from './Component/Presentation/Presentation';
import Service from './Component/Services/Service';
import Footer from './Component/footer/Footer';
import Contactus from './Component/Contact';
import Pdfinvent from './Component/Pdfinventaire';
import Chrono from './Component/Chrono';
import Comp from '../src/images/Comp 1.gif'
import Ecommerceall from './Component/Ecommerce/Ecommerceall';
import Signin from './Component/Signin';
import Admin from './Component/admin';
import Stock from './Component/Stock';
import Tranquille from './Component/Tranquille';
import AdminSignin from './Component/admin/AdminSignin';
import UserToform from './Component/Formulaire/UserToform';

function App() {
useEffect(() => {

  setTimeout(() => {
    /*showAlert() */
  },2000);
}, [])

  const sendPrixcarton=(data)=>{
    console.log("cart")
}
  return (
    <div className="App">
      <Router>
   <Switch>
     <Route exact path="/">< Home/></Route>
<Route exact path="/e-commerce"><NavBar/> <Ecommerceall sendPrixcarton={sendPrixcarton} /><Footer/> </Route>
  
<Route  path="/admin"    component={Admin}  />
<Route  path="/admins"    component={AdminSignin}  />
  <Route  path="/boutique">
  <Ecommerceall sendPrixcarton={sendPrixcarton}  
  className="ecommComponent"/>
 
{/*showAlertBox && <div className="alertBoxBoutique">
  <div className="alertBoxBoutiqueContents">
    <div className="closeButtonAlertBox" onClick={() => setShowAlertBox(false)}> X </div>
    <div>  <h4> Vous envisagez de déménager ? </h4></div>
    <div> <h5> Découvrez nos services </h5></div>
<div className="contentArrow"> 
<div> 
 <img src={Comp} alt="image for decoration"/>
 </div>
  </div>
    <div className="buttonGroupeBoutiqueAlert">
<div> <button> Soto</button> </div>
<div> <button> Chrono</button>  </div>
<div> <button> Stock</button>  </div>
      </div>
    </div>
    </div>

  */}
 


   </Route>

<Route exact path="/services" ><Service/> </Route>
   <Route exact path="/soto"><NavFomule/><Formulefinale/></Route>
<Route exact path="/chrono"><NavFomule/><Chrono/></Route>
<Route exact path="/presentation" ><Presentation/></Route>
<Route exact path="/tranquille"><Tranquille/></Route>
<Route exact path="/stock"><Stock/></Route>
<Route exact path="/contact"><Contactus/><Footer/></Route>
<Route   exact path="/signin"     component={Signin}/>
<Route exact path="/pdf"><Pdfinvent/><UserToform/></Route>
   </Switch>
   </Router>
    </div>
  );
}

export default App;
