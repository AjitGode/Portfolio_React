
import React, { useState, useEffect } from 'react';
import './App.css';
import ScrollReveal from 'scrollreveal';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {

  useEffect(() => {
    // Add event listener to window load event
    const loader = document.getElementById('preloader');

    window.addEventListener("load",function(){
        loader.style.display="none";
    })

   const sr =  ScrollReveal({
       distance:'80px',
       duration:2000,
       delay:200,
       reset: true,
      });

        // Initialize ScrollReveal
        sr.reveal('.home-content, .heading', { origin: 'top' });
        sr.reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
        sr.reveal('.home-content h1, .about-img', { origin: 'left' });
        sr.reveal('.home-content p, .about-content', { origin: 'right' });


        const docTitle = document.title;
        window.addEventListener("blur",()=>{
            document.title ="Come back :(";
        })
        window.addEventListener("focus",()=>{
            document.title =docTitle;
        })

    // title Change when tab change


  }, []);

  return (
    <>
     <div>
        {/* <div id="preloader"></div> */}
      <Header />
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />

    </div>
      
    </>
  );
};

export default App;
