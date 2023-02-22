import React,{useState,useEffect} from 'react';
import './nospartenaires.css'
const images = [
    "/images/icones/part_logo.png",
    "/images/icones/part_logo.webp",
    "/images/icones/part_logo3.jpg",
    "/images/icones/part_logo4.png"
  ];
const Nospartenaire =()=>{
    const [currentImage, setCurrentImage] = useState(0);
    const nextImage = () => {
        setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
      };
    
     /* const prevImage = () => {
        setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
      };
      */
      const [count, setCount] = useState(0);

      useEffect(() => {
        const intervalId = setInterval(() => {
          nextImage()
          setCount(count => count + 1);
        }, 2500);
        return () => clearInterval(intervalId);
      }, [count]); 
return(<div className='partners'>
<img src="/images/part2.jpg" alt="les partenaire de TMSDEM" className="parteners_img"/>
    <div className='part_content'><p><h1>Nos partenaires</h1></p></div>
    <div className='wrap_partners'>
        
        <img src={images[currentImage]}  className='part_logo' alt='nos partenaires '/>
       
        
    
    </div>
</div>)
}
export default Nospartenaire;