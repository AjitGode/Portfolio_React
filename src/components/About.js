import React from "react";
import '../App.css';

const About = ()=>{
    return(
        <>
        <section className="about" id="about">
        <div className="about-img">
          <img src="./assets/aboutus.png" alt="About" />
        </div>
        <div className="about-content">
          <h2 className="heading">About <span>Me</span></h2>
          <h3>Frontend Developer</h3>
          <p>Hi, I'm Ajit Gode. I have work experience as a tester as well as a frontend developer. I have done my schooling and graduation from Sangamner and completed my post-graduation in MCA from Savitribai Phule Pune University.</p>
          <a href="https://www.linkedin.com/in/ajit-gode-566495157/" target="_blank" rel="noopener noreferrer" className="btn">Read More</a>
        </div>
      </section>
        
        </>
    )
}

export default About;