import React from "react";
import '../App.css';
const Services = ()=>{

  const getFirstWords = (text, wordCount) => {
    return text.split(" ").slice(0, wordCount).join(" ");
  };

    return(
        <>
        <section className="services" id="skill">
        <h2 className="heading">My <span>Skills</span></h2>
        <div className="services-container">
          {[
            {title : 'HTML5', desc: 'The latest version of the standard markup language used to create and structure web pages, supporting multimedia and responsive design.',link:'https://www.w3schools.com/html/default.asp'},
            {title : 'CSS3', desc: 'The latest version of Cascading Style Sheets, used to style and layout web pages, including features like animations, grid layouts, and media queries.',link:'https://www.w3schools.com/css/default.asp'},
            {title:'TAILWIND-CSS', desc:'A utility-first CSS framework that provides low-level, reusable classes to build custom designs quickly without writing custom CSS, offering a highly customizable and responsive design system.',link:'https://tailwindui.com/documentation'},
            {title: 'JAVASCRIPT', desc: 'A versatile, high-level programming language primarily used for interactive web development, enabling dynamic content, form validation, and more.',link:'https://www.w3schools.com/js/default.asp'},
            {title:'REACT', desc:'A JavaScript library for building fast and scalable user interfaces, especially single-page applications, using a component-based architecture.', link:'https://www.w3schools.com/react/default.asp'},
            {title:'JAVA', desc:'A robust, object-oriented programming language used to build platform-independent applications, from web and mobile to enterprise-level systems.', link:'https://www.w3schools.com/java/default.asp'},
            {title:'NODEJS', desc:'A runtime environment that allows developers to run JavaScript on the server-side, enabling fast, scalable network applications like APIs and real-time services.', link:'https://www.w3schools.com/nodejs/default.asp'},
            {title:'GIT', desc:'A distributed version control system that helps developers track changes in code, collaborate on projects, and manage source code efficiently.', link:'https://www.w3schools.com/git/default.asp'}
          
          ].map((skill, index) => (
            <div className="services-box" key={index}>
              <i className={`bx bxl-${skill.title.toLowerCase()}`}></i>
              <h3>{skill.title}</h3>
              <p>{getFirstWords(skill.desc, 20)}...</p>
              <a href={skill.link} target="_blank" rel="noreferrer" className="btn">Read More</a>
            </div>
          ))}
        </div>
      </section>
        
        </>
    )
}

export default Services;