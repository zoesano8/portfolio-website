// src/App.js
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop'; // Adjust the path as necessary
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import JobBanner from './components/JobBanner';
import Projects from './components/Projects';
import ProjectDetails from './components/ProjectDetails';
import Footer from './components/Footer';


function App() {
  const location = useLocation();

  // Check if the current path is the homepage
  const isHomePage = location.pathname === '/';

  return (
    <div className="App">
      {/* Render Navbar, About, JobBanner, Footer only on the homepage */}
      {isHomePage && <Navbar />}
      {isHomePage && (
        <div>
          <section id="about">
            <About />
          </section>
          <JobBanner />
        </div>
      )}

      {/* ScrollToTop component to scroll to the top on route change */}
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Projects />} /> {/* Main page with project cards */}
        <Route path="/project-details/:id" element={<ProjectDetails />} /> {/* Project details page */}
      </Routes>

      {/* Render Footer only on the homepage */}
      {isHomePage && (
        <footer id="contact">
          <Footer />
        </footer>
      )}
    </div>
  );
}

export default App;
