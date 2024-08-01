import React from "react";
import '../App.css';
const Services = ()=>{
    return(
        <>
        <section className="services" id="skill">
        <h2 className="heading">My <span>Skills</span></h2>
        <div className="services-container">
          {['HTML5', 'CSS3', 'JAVASCRIPT', 'TYPESCRIPT', 'JAVA', 'ANGULAR', 'REACT', 'GIT'].map((skill, index) => (
            <div className="services-box" key={index}>
              <i className={`bx bxl-${skill.toLowerCase()}`}></i>
              <h3>{skill}</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi eos expedita, harum quos consequatur necessitatibus. Deleniti, voluptatibus sed doloribus quos nihil deserunt quas. Minus voluptate maiores consectetur quia neque sequi!</p>
              <a href="#" className="btn">Read More</a>
            </div>
          ))}
        </div>
      </section>
        
        </>
    )
}

export default Services;