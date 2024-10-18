// src/components/Home.js
import React from 'react';
import Navbar from './Navbar';
import About from './About';
import Projects from './Projects';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            <Navbar />
            <About />
            <Projects />
            <Footer />
        </div>
    );
};

export default Home;
