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
                        I'm an Electrical Engineer with diverse interests. <br />
                        My portfolio features projects in RF engineering, cloud technologies, full-stack web development, and university coursework. <br />
                        Feel free to explore my portfolio and reach out with any questions or opportunities!
                    </p>
                </div>
            </section>
        </div>
    );
};

export default About;
