import React,{useState,useEffect} from "react"
import {Link} from 'react-router-dom';
import {FaQuoteRight, FaStar} from 'react-icons/fa';
const TesmItem=(props)=>{
const {auteur,text,nextTemoignage}=props;
const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Call your function here
    
      nextTemoignage()
      setCount(count => count + 1);
    }, 2500);
    return () => clearInterval(intervalId);
  }, [count]); 
    return(<div className="testmonial_content" >
        <div className="stars">
      
<FaStar onClick={nextTemoignage} className="switch_test"/>
<FaStar onClick={nextTemoignage} className="switch_test2"/>
<FaStar onClick={nextTemoignage} className="switch_test3"/>
<FaStar onClick={nextTemoignage} className="switch_test4"/>
<FaStar onClick={nextTemoignage} className="switch_test5"/>
</div>
<div className="auteur_img_wrap">
    <div className="auther_img">{auteur.slice(0,1).toUpperCase()}</div></div>
 <div className="testimonialText">
                         <FaQuoteRight className="quate"/>{text}  <FaQuoteRight className="quate"/>
                         
                            </div>
                            <div className="clientName">
                                <Link to="https://g.co/kgs/S71DQC">{auteur}</Link>
                                  </div>
                        
    </div>)
}
export default TesmItem;
/*className="testimonial"
/*className="slider"
/*className="sliderContent"
/* className="testimonialName"*/