import React from 'react';
import './App.css';  // Importing styles from App.css

import Navbar from './components/Navbar';  // Import the updated Navbar component
import About from './components/About';    // About Me Section
import Resume from './components/Resume';  // Resume Section
import Projects from './components/Projects';  // Projects Section
import Footer from './components/Footer';  // Footer with contact form

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar />

      {/* About Me Section */}
      <section id="about">
        <About />
      </section>

      {/* Resume Section */}
      <section id="resume">
        <Resume />
      </section>

      {/* Projects Section */}
      <section id="projects">
        <Projects />
      </section>

      {/* Footer with Contact Form */}
      <footer id="contact">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
