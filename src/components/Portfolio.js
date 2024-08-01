import React from "react";
import '../App.css';

const Portfolio = ()=>{
    return (
        <>
        <section className="portfolio" id="portfolio">
        <h2 className="heading">Latest <span>Project</span></h2>
        <div className="portfolio-container">
          {[
            { img: 'portfolio1.jpg', title: 'INSTITUTE MANAGEMENT SYSTEM', desc: 'Institute Management system is designed for managing and storing all the data available in the institute. It involves login of employee. The website helps maintaining institute data like adding institute data, enrollment data, course data, user data.', link: 'https://github.com/AjitGode/AngularProject' },
            { img: 'portfolio2.jpg', title: 'BLOOD BANK MANAGEMENT SYSTEM', desc: 'It is a Web Application that helps us to find blood group with its most efficient time to take care of the blood and it is easy to hand over the blood to the hospitals to help people to get rid of their problems.', link: 'https://github.com/AjitGode/BloodBank' },
            { img: 'portfolio3.jpg', title: 'PORTFOLIO', desc: 'My Portfolio website which contains all the information about me, like my work experience, skills, contact info, and other related information.', link: 'https://github.com/AjitGode' },
            { img: 'portfolio4.jpg', title: 'DASHBOARD', desc: 'A dashboard for managing data and visualizing it in a user-friendly way.', link: 'https://github.com/AjitGode/Dashboard' }
          ].map((project, index) => (
            <div className="portfolio-box" key={index}>
              <div className="portfolio-img">
                <img src={`./assets/${project.img}`} alt={project.title} />
              </div>
              <div className="portfolio-layer">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" ><i className='bx bx-link-external'></i></a>
              </div>
            </div>
          ))}
        </div>
      </section>
        
        </>
    )
}

export default Portfolio;