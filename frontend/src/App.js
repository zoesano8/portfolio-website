// src/App.js
import React from 'react';
import '@fortawesome/fontawesome-svg-core/styles.css';
import './App.css';  // Importing styles from App.css
import Navbar from './components/Navbar';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Footer from './components/Footer';

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
