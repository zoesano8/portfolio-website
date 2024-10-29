// src/components/Projects.js
import React from 'react';
import './Projects.css';

const Projects = () => {
  const projectLinks = [
    {
      id: 1,
      title: "Project 1: Remote RF Spectrum Monitoring with SDR and AWS",
      description: "This project showcases my ability to set up an SDR for remote RF spectrum monitoring, collecting data, and analyzing it with AWS cloud technologies.",
      link: "/project-details/1"
    },
    {
      id: 2,
      title: "Project 2: Low Cost Direction Finding System using RTL-SDR",
      description: "This project showcases my ability to create a simple direction finding system with a hobby DR to locate sources of RF signals.",
      link: "/project-details/2"
    },
    {
      id: 3,
      title: "Project 3: Low Noise Amplifier",
      description: "This project is from my Active RF & Microwaves course from college.",
      link: "/project-details/3"
    },
  ];

  return (
    <div>
      <section id="projects">
        <h2 id="project-title">Projects</h2>
        <div className="projects-container">
          {projectLinks.map((project) => (
            <div className="project-card" key={project.id}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <br />
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer">
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
