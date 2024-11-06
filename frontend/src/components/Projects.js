// src/components/Projects.js
import React from 'react';
import './Projects.css';

const Projects = () => {
  const projectLinks = [
    {
      id: 1,
      title: "Project 1: Low Noise Amplifier",
      description: "Learn about the design of a low-noise amplifier (LNA) engineered to amplify ultra-weak signals while preserving signal clarity. This project combines advanced materials and circuit design techniques to minimize noise, ensuring cleaner, more accurate signal amplification ideal for sensitive RF applications.",
      link: "/project-details/1"
    },
    {
      id: 2,
      title: "Project 2: Coupled Line Coupler",
      description: "Discover the inner workings of a Coupled Line Coupler—a powerful passive RF component designed to manage signal flow, reduce noise, and improve performance in electronic systems. See how it’s used in RF meters to deliver precision in signal monitoring and control.",
      link: "/project-details/2"
    },
    {
      id: 3,
      title: "Project 3: Magnetic Fields From Power Lines and Their Potential Interference with Pacemakers",
      description: "Explore electromagnetic concepts and their impact on the world around us. This project specifically examines how electromagnetic fields from high-power transmission lines might affect individuals with pacemakers — a small, battery-powered device that helps regulate heart rhythm and rate.",
      link: "/project-details/3"
    },
    {
      id: 4,
      title: "Project 4: FM Radio Receiver and Spectrum Monitoring with SDR and GNU Radio",
      description: "This hobby project showcases my ability to set up an SDR for receiving audio from a local FM radio station and conducting RF spectrum monitoring.",
      link: "/project-details/4"
    },
    {
      id: 5,
      title: "Project 5: Low Cost Direction Finding System using RTL-SDR",
      description: "This project showcases my ability to create a simple direction finding system with a hobby DR to locate sources of RF signals.",
      link: "/project-details/5"
    },
  ];

  return (
    <div>
      <section id="projects">
        <h2 id="project-title">Projects</h2>
        <div className="projects-container">
          {projectLinks.map((project) => (
            <div className="project-card" key={project.id}>
              <br />
              <h3>{project.title}</h3>
              <br />
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
