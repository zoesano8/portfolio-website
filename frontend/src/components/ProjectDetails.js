import React from 'react';
import { useParams } from 'react-router-dom';
import './ProjectDetails.css'; // Link to your CSS file

const ProjectDetails = () => {
  const { id } = useParams(); // Get the project ID from the URL

  // Sample project data with images and descriptions
  const projects = {
    1: {
      title: "Remote RF Spectrum Monitoring with SDR and AWS",
      description: "This project showcases my ability to set up an SDR for remote RF spectrum monitoring, collecting data, and analyzing it with AWS cloud technologies.",
      details: "That is, this project focuses on RF signal processing, cloud integration, and simple data analytics.",
      images: [
        '/images/rf-system-design-1.jpg',
        '/images/rf-system-design-2.jpg'
      ]
    },
    2: {
      title: "Low Cost Direction Finding System using RTL-SDR",
      description: "This project showcases my ability to create a simple direction finding system with a hobby DR to locate sources of RF signals.",
      details: "In particular, this project is useful for applications in radar, communications, and electronic warfare.",
      images: [
        '/images/cloud-simulations-1.jpg',
        '/images/cloud-simulations-2.jpg'
      ]
    },
    3: {
      title: "Low Noise Amplifier",
      description: 'This project was completed as part of my Active RF & Microwaves course at the Colorado School of Mines.',
      details: `
        We discuss here a low-noise amplifier (LNA), which is an important device used to boost weak signals without adding much noise.
        We will cover several topics, including:
      `,
      bulletPoints: [
        "An overview of LNAs and their purpose",
        "The schematic design, which shows how the components are connected",
        "Simulation results that help us understand how the amplifier will perform",
        "The process of tuning and optimizing the LNA to improve its performance",
        "Smith charts, which are tools used for matching the amplifier's impedance to ensure efficient signal transfer",
        "Our final land pattern layout, which illustrates how the amplifier will be physically arranged on a circuit board."
      ],
      pdf: '/LNA_Zoe_Sano.pdf',
      video: '/Low Noise Amplifier.mp4'
    },
  };

  const project = projects[id]; // Get the project data based on the ID

  // If the project doesn't exist, you could show a 404 message or similar
  if (!project) {
    return <div>Project not found.</div>;
  }

  return (
    <div className="projectDetails">
      <h1>{project.title}</h1>
      <br />
      <p>{project.description}</p>
      <p className='details'>{project.details.split('\n').map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br /> {/* Insert line breaks */}
        </React.Fragment>
      ))}</p>

      {/* Render bullet points */}
      <ul className='details'>
        {project.bulletPoints.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>

      {/* Conditionally Render Images */}
      {project.images && project.images.length > 0 && (
        <div className="project-images">
          {project.images.map((image, index) => (
            <img key={index} src={image} alt={`${project.title} - ${index + 1}`} />
          ))}
        </div>
      )}

      {/* Conditionally Render PDF viewer with scrollable 8.5 x 11 view */}
      {project.pdf && (
        <div className="project-pdf" style={{ margin: '30px' }}>
          <h2>Project Documentation</h2>
          <iframe className="pdf"
            src={project.pdf}
            width="100%"
            height="800px" // Close to 8.5 x 11 aspect ratio
            style={{ border: 'none', overflow: 'auto' }}
            title="Project PDF Viewer"
          ></iframe>
        </div>
      )}

      {/* Conditionally Render Video */}
      {project.video && (
        <div className="project-video" style={{ margin: '30px' }}>
          <h2>Project Video</h2>
          <video className="vid" width="100%" height="auto" controls>
            <source src={project.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;
