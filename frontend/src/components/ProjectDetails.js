import React from 'react';
import { useParams } from 'react-router-dom';
import './ProjectDetails.css'; // Link to your CSS file

const ProjectDetails = () => {
  const { id } = useParams(); // Get the project ID from the URL

  // Sample project data with images and descriptions
  const projects = {
    1: {
      title: "Low Noise Amplifier",
      description: 'This project was completed as part of my Active RF & Microwaves course at the Colorado School of Mines.',
      details: `
        Here we discuss a low-noise amplifier (LNA), which is an important device used to boost weak signals without adding much noise.
        We will cover several topics, including:
      `,
      bulletPoints: [
        "An overview of LNAs and their purpose",
        "The schematic design, which shows how the components are connected",
        "Simulation results that help us understand how the amplifier will perform",
        "The process of tuning and optimizing the LNA to improve its performance",
        "Smith charts, which are tools used for matching the amplifier's impedance to ensure efficient signal transfer",
        "Our final land pattern layout, which illustrates how the amplifier will be physically arranged on a circuit board"
      ],
      pdf: '/LNA_Zoe_Sano.pdf',
      video: '/LowNoiseAmplifier.mp4'
    },

    2: {
      title: "Coupled Line Coupler",
      description: 'This project was completed as part of my Passive RF & Microwaves course at the Colorado School of Mines.',
      details: `
        This project explores the design and simulation of a Coupled Line Coupler (CLC), a passive RF component commonly used for power splitting, combining, and monitoring in RF systems.
        Key topics covered include:
      `,
      bulletPoints: [
        "An overview of Coupled Line Couplers (CLCs) and how this design models a CLC used in RF power meters or Voltage Standing Wave Ratio (VSWR) meters",
        "The specific type of CLC, a backward wave coupler, which has the coupling port positioned near the input port",
        "Modes of operation, including even and odd modes essential for coupling",
        "Calculating impedances and design specifications based on coupling requirements",
        "The design process, including S-Parameter simulations for both schematic and momentum simulations",
        "Results and analysis of S-parameters to verify expected coupling and performance"
      ],
      pdf: '/CLC.pdf',
      video: '/CoupledLineCoupler.mp4'
    },

    3: {
      title: "Magnetic Fields From Power Lines and Their Potential Interference with Pacemakers",
      description: `This project was completed as part of my Introduction to Electromagnetics course at the Colorado School of Mines.
       I want to give a special shoutout to my partner, Brennen Ward, who was an incredibly smart Electrical Engineering student and a good friend. He passed away just shy of graduation, but his cheerful energy and intelligence will always be remembered by those who were lucky to know him.
      `,
      details: `
        This paper explores whether the magnetic fields produced by high-voltage power lines interferes with pacemaker functionality.
        My partner and I were insterested after seeing a 1979 study linking high power transmission lines to childhood leukemia. Although the scientific consensus dismisses a causal relationship between electromagnetic fields (EMF) from these lines and serious health conditions, the interaction with sensitive medical devices like pacemakers, which approximately 1.5 million Americans have pacemakers, warrants an investigation.
        We will cover several topics, including:
      `,
      bulletPoints: [
        "Biot-Savart Law: law that describes how electric currents create magnetic fields, employed here to calculate the magnetic field strength around transmission lines and determined that fields exceeding 10 Gauss (G) are hazardous to pacemaker function",
        "Pacemaker Functionality: Pacemakers are designed to withstand certain levels of EMI but may experience malfunction if exposed to frequencies typical of high-power lines, specifically around 60 Hz",
        "Faraday's Law:  The study utilized Faraday's Law to demonstrate how the induced voltage in circuits is influenced by the distance from EMF sources and the duration of exposure",
        "Results: Matlab simulations revealed  that a power line carrying 2 kA of current can create magnetic fields hazardous to pacemakers within approximately 4 cm. Further analysis showed that at greater distances (e.g., 60 ft and beyond), the magnetic field strength drops significantly, reducing potential risks.",
      ],
      pdf: '/EENG386_paper.pdf'
    },

    4: {
      title: "FM Radio Receiver and Spectrum Monitoring with SDR and GNU Radio",
      description: "This hobby radio project showcases my ability to set up an SDR for receiving audio from a local FM radio station and conducting simple RF spectrum monitoring.",
      details:`
      Here's a project that every radio enthusiast should start with. Tuning into a local channel and visualizing the signal reception as well as improving the quality of the signal for an optimal hearing experience.
      Let's discuss the hardware setup for the project, the flowgraph created in gnuradio-companion, and the results of the project in a short video demonstration.
      `,
      bulletPoints: [
        "Environment: Raspberry Pi 3 (Model B), loaded with Raspbian OS, check & update the system with 'sudo apt-get update/upgrade', install rtl-sdr and GNUradio, a free & open source software development toolkit that provides signal processing blocks to implement SDR and signal processing systems) in the terminal, to your RPI or computer",
        "Hardware: Computer (RPI3B), Keyboard & Mouse (mine not depicted as my RPI has Bluetooth capability), HDMI cable to see via external monitor, Audio speaker connected via audio jack (again mine is a bluetooth speaker), RTL-SDR dongle connected via USB-A port, and telescopic antennas set up as vertical dipole antenna mounted to tripod (mount antenna outside or against top level floor window with minimal interference)",
        "Flowgraph: Run gnuradio-companion (GRC), which GRC is a graphical tool for creating GNUradio signal flowgraphs using blocks",
        "The flowgraph includes using the RTL-SDR to capture the radio station signal and then follows steps to decode the FM broadcasts. Additional Frequency and Waterfall sinks are taken to visualize the radio frequency spectrum.",
        "Breakdown (start to end): RTL-SDR Source - for capturing the radio frequency signals -> Low Pass Filter (LPF) - filters out unwanted frequencies to isolate the FM signal -> WBFM Receive - demodulates the FM signal to extract audio -> Rational Resampler - adjusts the sample rate for compatibility with the audio sink -> Audio Sink - outputs the decoded audio -> Frequency, Waterfall, and Time Sinks - visualize the signal spectrum and frequency changes in real time",
        "Results: Stable FM audio output showing how a little RTL-SDR ($44 for dongle and antenna kit on Amazon) plus free software enables one to capture, filter, and decode FM broadcasts, plus much more!",
      ],
       images: [
        { src: '/setup2.png', caption: 'Hardware Setup with Raspberry Pi and RTL-SDR Dongle' },
        { src: '/Flowgraph.png', caption: 'GNU Radio Flowgraph for FM Radio Receiver' },
        //{ src: '/lpf.png', caption: 'Low Pass Filter Implementation in the Flowgraph' },
        //{ src: '/waterfall.png', caption: 'Waterfall Plot of FM Signal Spectrum' }
      ],
        bulletPoints2: [
        "Spectrum Monitoring - the frequency and waterfall sinks provide real time visuals of signal strength and frequency distribution, enabling spectrum analysis and observation of radio activity across various bandwidths",
        "FM Demodulation - filters and demodulators to isolate and decode FM radio channels, allowing audio playback at 48 kHz (standard for audio and video) through the Audio Sink",
        "Sample Rate Adjustment - rational resampler adjusts the sample rate via interpolation/decimation to ensure compatibility between different stages of processing",
        ],
    },

    5: {
      title: "Low Cost Direction Finding System using RTL-SDR",
      description: "This project showcases my ability to create a simple direction finding system with a hobby DR to locate sources of RF signals.",
      details: "In particular, this project is useful for applications in radar, communications, and electronic warfare.",
      images: [
        '/images/cloud-simulations-1.jpg',
        '/images/cloud-simulations-2.jpg'
      ]
    },
  };

  const project = projects[id]; // Get the project data based on the ID

  // If the project doesn't exist, you could show a 404 message or similar
  if (!project) {
    return <div>Project not found.</div>;
  }

  return (
    <div className="project-details">
      <h1>{project.title}</h1>
      <br />
      <p>{project.description}</p>
      <p className='details'>{project.details.split('\n').map((line, index) => (
        <React.Fragment key={index}>
          {line}
        </React.Fragment>
      ))}</p>

      {/* Render bullet points if they exist */}
      {project.bulletPoints && project.bulletPoints.length > 0 && (
        <ul className="details">
          {project.bulletPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      )}

      <br />

      {/* Conditionally Render Images */}
      {project.images && project.images.length > 0 && (
        <div className="project-images">
          {project.images.map((image, index) => (
            <div className="image-container" key={index}>
              <img src={image.src} alt={`${project.title} - ${index + 1}`} />
              <p className="image-description">{image.caption}</p>
            </div>
          ))}
          <br />
        </div>
      )}

      {/* Render the second set of bullet points after images */}
      {project.bulletPoints2 && project.bulletPoints2.length > 0 && (
        <ul className="details2">
          <h2>Project Features</h2>
          {project.bulletPoints2.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      )}

      {/* Conditionally Render PDF viewer */}
      {project.pdf && (
        <div className="project-pdf" style={{ margin: '30px' }}>
          <h2>Project Documentation</h2>
          <iframe
            className="pdf"
            src={project.pdf}
            width="100%"
            height="800px"
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
