import React from 'react';
import './Projects.css';  // Import the CSS file <h2>My Projects</h2>

const Projects = () => {
  return (
    <div>
      <h2 id="project-title">Projects</h2>

      <div className="projects-container">

        {/* Project 1 */}
        <div className="project-card">
          <h3>Project 1: RF System Design</h3>
          <p>This project showcases my ability to design and analyze RF systems using cloud-based simulations and AWS services for technical tasks.</p>
          <a href="https://example.com" target="_blank" rel="noopener noreferrer">View Project
          </a>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <h3>Project 2: Cloud-based Simulations</h3>
          <p>Here, I demonstrated proficiency in running cloud simulations using AWS EC2, S3, and other cloud services for real-time RF analysis.</p>
          <a href="https://example.com" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>

        {/* Project 3 */}
        <div className="project-card">
          <h3>Project 3: AWS Integration</h3>
          <p>This project highlights the integration of AWS Lambda and API Gateway for serverless backend development to support RF engineering applications.</p>
          <a href="https://example.com" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
