
import React, { useEffect } from 'react';
import '../App.css';

const Header = () => {
    useEffect(() => {
      
        // Scroll Section
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('header nav a');
    
        const handleScroll = () => {
          const top = window.scrollY;
    
          sections.forEach(sec => {
            const offset = sec.offsetTop - 150;
            const height = sec.offsetHeight;
            const id = sec.getAttribute('id');
    
            if (top >= offset && top < offset + height) {
              navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector(`header nav a[href*=${id}]`)?.classList.add('active');
              });
            }
          });
    
          // Sticky navbar
          const header = document.querySelector('header');
          header.classList.toggle('sticky', window.scrollY > 100);
    
          // Remove toggle icon and navbar when clicking navbar link
          
          const menuIcon = document.querySelector('#menu-icon');
          const navbar = document.querySelector('.navbar');

          menuIcon.onclick = ()=>{
            menuIcon.classList.toggle('bx-x');
            navbar.classList.toggle('active');
        };

          menuIcon?.classList.remove('bx-x');
          navbar?.classList.remove('active');
        };
    
        window.addEventListener('scroll', handleScroll);

        //Preloader  

        const loader = document.getElementById('preloader');

        window.addEventListener("load",function(){
            loader.style.display="none";
        })
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };

        
      }, []);
    
return (
    <>

<div id="preloader"></div>
<header className="header">
  <a href="#" className="logo">Portfolio</a>
  <i className='bx bx-menu' id="menu-icon"></i>
  <nav className="navbar">
    <a href="#home" className="active">Home</a>
    <a href="#about">About</a>
    <a href="#skill">Skills</a>
    <a href="#portfolio">Portfolio</a>
    <a href="#contactUs">ContactUs</a>
  </nav>
</header>
    </>
)


}
export default Header;
