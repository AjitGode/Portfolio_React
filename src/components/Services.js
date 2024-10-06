import React from "react";
import '../App.css';
const Services = ()=>{
    return(
        <>
        <section className="services" id="skill">
        <h2 className="heading">My <span>Skills</span></h2>
        <div className="services-container">
          {[
            {title : 'HTML5', desc: 'The latest version of the standard markup language used to create and structure web pages, supporting multimedia and responsive design.'},
            {title : 'CSS3', desc: 'The latest version of Cascading Style Sheets, used to style and layout web pages, including features like animations, grid layouts, and media queries.'},
            {title:'TAILWIND-CSS', desc:'A utility-first CSS framework that provides low-level, reusable classes to build custom designs quickly without writing custom CSS, offering a highly customizable and responsive design system.'},
            {title: 'JAVASCRIPT', desc: 'A versatile, high-level programming language primarily used for interactive web development, enabling dynamic content, form validation, and more.'},
            {title:'REACT', desc:'A JavaScript library for building fast and scalable user interfaces, especially single-page applications, using a component-based architecture.'},
            {title:'JAVA', desc:'A robust, object-oriented programming language used to build platform-independent applications, from web and mobile to enterprise-level systems.'},
            {title:'NODEJS', desc:'A runtime environment that allows developers to run JavaScript on the server-side, enabling fast, scalable network applications like APIs and real-time services.'},
            {title:'GIT', desc:'A distributed version control system that helps developers track changes in code, collaborate on projects, and manage source code efficiently.'}
          
          ].map((skill, index) => (
            <div className="services-box" key={index}>
              <i className={`bx bxl-${skill.title.toLowerCase()}`}></i>
              <h3>{skill.title}</h3>
              <p>{skill.desc}</p>
              <a href="#" className="btn">Read More</a>
            </div>
          ))}
        </div>
      </section>
        
        </>
    )
}

export default Services;