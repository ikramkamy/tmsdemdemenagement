import React, { useEffect } from 'react';
import { jsPDF } from "jspdf";
import Pdfinvent from '../Pdfinventaire';
import './pdf.css';
const PdfComponent=(props)=>{
    const {roomList,cart,sendpdftoAdmin}=props;
    console.log("my cart is in pdf compo",cart)
    const generatepdf = () => {
       
       var doc = new jsPDF('portrait', 'pt','a3');
       doc.html(document.querySelector("#all"), 
       { callback: function (pdf) { pdf.save("inventaire.pdf") } })}

    return(<div className="modal-cart modal-pdf">
          <Pdfinvent generatepdf={generatepdf} className="wrap-pdf" >
    <div className="pdf-stylig">
        <div className="wrap-pdf-stylig"  id="all">
          
                
                <h1 className="principale-titles invent-title">
                    <img src="./images/logo-01.png" />
                    <div className="invent-inter">
                        <div className="invent-item">contact@tms-dem.fr</div>
                        <div className="invent-item">+33 1 41 77 11 32</div>
                    </div>
                    <div className="invent-inter">
                        <div className="invent-item">Service client 7j/7</div>
                        <div className="invent-item">300 A Rue Marcel Paul,
                            94500 Champigny-sur-Marne, France</div>
                    </div>
                </h1>
                <h1 className="principale-titles-pdf" style={{color:"#2c216f"}}> Votre demande</h1>
                <div className="inevnt-item">
                <div>M/Mme: </div>
                <div>{props.name} {props.fname}</div>
                </div>
                <div className="inevnt-item">
               
                    <div>La date:</div> 
                    <div>{props.date}</div>
                </div>
                <div className="inevnt-item">
                    <div>Type de déménagement:</div>
                    <div>{props.type_dem}</div>
                </div>
                <div className="inevnt-item">
                    <div>Email:</div>
                    <div>{props.email}</div>
                </div>
                <div className="inevnt-item">
                    <div>l'adresse de départ :</div>
                    <div>{props.adress1}</div>
                </div>
                <div className="inevnt-item">
                    <div>l'adresse de l'arrivée:</div>
                    <div>{props.adress2}</div>
                </div>
                <div className='wrap-items'>
                <div className="inevnt-item special-item">
                    <div>Le volume de total  calculé en m³</div>
                    
                </div>
                <div className='total-cubage'>{props.cubage}</div>
               
                <div className='special-item-titles'>
                    <div className='sp-it-tit-obj'>Object</div>
                    <div  className='sp-it-tit'>Démontage/<br/>Remontage</div>
                    <div  className='sp-it-tit'>Fragile</div>
                    <div  className='sp-it-tit'>Emballage</div>
                    <div  className='sp-it-tit'>Volume</div>
                    <div  className='sp-it-tit'>Quantité</div>
                </div>
                {roomList?.map((e)=> <div>
                    <div className="inevnt-item special-item">{e.name} </div>
                {e.tab?.map((ob)=> <div className='special-item-titles rmov-backg'>
                    <div className='sp-it-tit-obj '>{ob.name}</div>
                    <div  className='sp-it-tit ' style={{textAline:"center"}}>{ob.remontage}</div>
                    <div  className='sp-it-tit '>{ob.commentaire}</div>
                    <div  className='sp-it-tit '>{ob.emballage}</div>
                    <div  className='sp-it-tit '>{ob.volume}</div>
                    <div  className='sp-it-tit'>{ob.quantite}</div>
                    </div>)}
                
                </div>)}
               
                <div className="inevnt-item special-item"><div>Le volume de total estimé:</div>
                <div>{props.vol1}</div></div>
                <div className="inevnt-item"><div>La liste d'achat: </div>
                
                
                
                </div>
                </div>
                <div className='wrap-cart-for-pdf_title' >
                    <div >Objet</div>
                    <div>Le prix unitaire</div>
                    <div>La quantité</div>
                </div>
                {cart?.map((e)=><div className='wrap-cart-for-pdf'>
                <div className='item_achat-pdf1'>{e.name}</div>
                <div className='item_achat-pdf'>{e.prix}</div>
                <div className='item_achat-pdf'>{e.quantite}</div>
                </div>

                )}
                  <div className="inevnt-item special-item"><div>Les objets lourds:</div></div>
                    
                    <div className="inevnt-item lour_style">
                        <div >{props.lourPdf.piano}</div>
                        <div >{props.lourPdf.frigo}</div>
                       <div >{props.lourPdf.pas_obejts_lourd}</div> 
                    </div>
                <div className="inevnt-item invent-montant" style={{ marginBottom: "50px" }}>
                    <div>Le montant total:</div>
                    <div>{props.total} euro</div>
                </div>

            
        </div>
        <div className=" btn-formule btn-download"
            onClick={generatepdf}>Télècharger</div>
           <div onClick={sendpdftoAdmin}>Envoyez la commande soto à l'admin</div>
            </div>
            </Pdfinvent>
    </div>
        )};
        
        export default PdfComponent;