// src/components/About.js
import React from 'react';
import './About.css'; // Import the CSS for styling

const About = () => {
    return (
        <section className="about-section">
            <h2>Hello! I'm Zoe Sano.</h2>
            <img src="/headshot.jpg" alt="Zoe Sano" className="headshot" />
            <p>
                I'm an engineer with a wide variety of interests. <br />
                You can always find me working on both creative and technical projects.
                This portfolio showcases some of my work in web development, RF engineering, and cloud technologies. Feel free to browse around and send me a message!
            </p>
        </section>
    );
};

export default About;
