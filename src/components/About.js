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
          <p>A dedicated QA Developer with a passion for ensuring software product quality and development. As a fresher in the industry, I specialize in automation testing and development using tools like Cypress and Playwright. I am committed to continuous learning and staying updated with the latest technologies in the field.</p>
          <a href="https://www.linkedin.com/in/ajit-gode-566495157/" target="_blank" rel="noopener noreferrer" className="btn">Read More</a>
        </div>
      </section>
        
        </>
    )
}

export default About;