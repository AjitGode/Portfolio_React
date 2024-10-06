import React,{useEffect} from "react";
import '../App.css';
import Typed from 'typed.js';


const Home = ()=>{
    
      useEffect(()=>{

        const typed = new Typed('.multiple-text', {
            strings: ["Frontend Developer", "Test Engineer"],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true
          });

      },[]);
    return (
        <>
        <section className="home" id="home">
        <div className="home-content">
          <h3>Hello, It's Me</h3>
          <h1>Ajit Gode</h1>
          <h3>And I'm a <span className="multiple-text"></span></h3>
          <p>A dedicated Software Developer with a passion for ensuring software quality and development. As a fresher in the industry, I specialize in front-end development and automation testing using tools like Cypress and Playwright. I am committed to continuous learning and staying updated with the latest technologies in the field.</p>
          <div className="social-media">
            <a href="https://www.facebook.com/Godeajit25" target="_blank" rel="noopener noreferrer"><i className='bx bxl-facebook'></i></a>
            <a href="https://twitter.com/godeajit25?t=xaEZbUnzXIjNRD7rb_DoBw&s=09" target="_blank" rel="noopener noreferrer"><i className='bx bxl-twitter'></i></a>
            <a href="https://instagram.com/gode.ajit25?igshid=NTE5MzUyOTU=" target="_blank" rel="noopener noreferrer"><i className='bx bxl-instagram'></i></a>
            <a href="https://www.linkedin.com/in/ajit-gode-566495157/" target="_blank" rel="noopener noreferrer"><i className='bx bxl-linkedin-square'></i></a>
            <a href="https://github.com/AjitGode" target="_blank" rel="noopener noreferrer"><i className='bx bxl-github'></i></a>
          </div>
          <a href='./assets/Ajit-Gode-Playwright.pdf' download="Ajit_Gode.pdf" className="btn">Download CV</a>
        </div>
        <div className="home-img">
          <img src='./assets/Home12.png' alt="Home" />
        </div>
      </section>
        
        </>
    )
   
}

export default Home;