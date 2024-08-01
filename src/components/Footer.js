import React,{useState, useEffect} from "react";
import '../App.css';

const Footer = ()=>{
  
    const [year, setYear] = useState(new Date().getFullYear());
    

    useEffect(() => {
        // Update the year whenever the component mounts or the date changes.
        setYear(new Date().getFullYear());
         
        const scrollTop = document.getElementById('scrolltop')

        window.onload = () => {
            scrollTop.style.visibility = "hidden";
            scrollTop.style.opacity = 0;
        }
        
        const handleScroll = () => {
            if (window.scrollY > 200) {
                scrollTop.style.visibility = "visible";
                scrollTop.style.opacity = 1;
            } else {
                scrollTop.style.visibility = "hidden";
                scrollTop.style.opacity = 0;
            }
          };
          window.addEventListener('scroll', handleScroll);
      
 
    
      }, []);

    return (
        <>
        <div id="scrolltop" >
        <a href="#home" className="top-button">
            <i className='bx bx-up-arrow-alt'></i>
        </a>
    </div>
    
    <footer className="footer">
        <div className="footer-text">
            <p>Copyright &copy; <span id="year">{year}</span> by Ajit Gode | All Rights Reserved</p>
        </div>
    </footer>
        
        </>
    )
}

export default Footer;