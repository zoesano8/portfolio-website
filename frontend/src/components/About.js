import React, { useState, useEffect } from 'react';
import './About.css';
import FallingStars from './FallingStars';

const About = () => {
    const [text, setText] = useState('');
    const [showCursor, setShowCursor] = useState(true);
    const fullText = "Hello, I'm Zoe.";
    const typingSpeed = 150;

    useEffect(() => {
        let index = 0;

        const typingInterval = setInterval(() => {
            setText(fullText.slice(0, index + 1));
            index++;

            if (index === fullText.length) {
                clearInterval(typingInterval); // Stop when full text is typed
            }
        }, typingSpeed);

        // Hide cursor after 5 seconds
        const cursorTimeout = setTimeout(() => {
            setShowCursor(false);
        }, 5000);

        return () => {
            clearInterval(typingInterval);
            clearTimeout(cursorTimeout);
        };
    }, []);

    return (
        <div className="about-section-container">
            <FallingStars />
            <section className="about-section">
                <h2 className={`typewriter ${showCursor ? 'blinking' : ''}`}>{text}</h2>
                <div>
                    <img src="/headshot.jpg" alt="Zoe Sano" className="headshot" />
                    <p>
                        <i>I'm an Electrical Engineer with a passion for blending technology and design.</i>
                        <br />
                        My portfolio spans projects in RF engineering, from hands-on university work to hobbyist radio applications.
                        <br />
                        I've also integrated AWS cloud technologies, full-stack web development, and user experience design to showcase my multifaceted skill set and versatility.
                        <br />
                        <br />
                        Browse my portfolio to see how I bring my engineering skills to life across a range of projects. Please feel free to reach out with any questions or opportunities!
                    </p>
                </div>
            </section>
        </div>
    );
};

export default About;
