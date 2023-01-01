import React, { useState } from 'react';
import {Link} from 'react-router-dom';
const Carous =()=>{
const testemList=useState[{
    auteur:"",
    text:"",
    stars:5,
}]
return(<div>

<div className="testimonial">
                <h2> Ils témoignent</h2>

                <div className="slider">
                    <div className="controllButton">
                        <div>
                            <p> / </p>
                        </div>
                    </div>
                    <div className="sliderContent">
                     {/*   <div className="stars">

                            <div> <img src={Trace} /></div>
                            <div> <img src={Trace} /></div>
                            <div> <img src={Trace} /></div>
                            <div> <img src={Trace} /></div>
                            <div> <img src={Trace} /></div>


                        </div>
                       */}
                        <div className="testimonialName">
                            <div className="clientName">
                                <Link to="https://g.co/kgs/S71DQC">Lina Fakhoury</Link>
                                  </div>
                        </div>
                        <div className="testimonialText">
                            <div>
                                
                                 Surprise très positive! Un service rapide, efficace. Je recommande! </div>

                        </div>
                        
                    </div>

                    <div className="controllButton">
                        <div>
                            <p> / </p>
                        </div>
                    </div>
                </div>
            </div>
</div>)
}
export default Carous;