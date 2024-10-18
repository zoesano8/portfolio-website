import React, { useState, useEffect } from 'react';
import './About.css';

const About = () => {
    const [text, setText] = useState('');
    const [showCursor, setShowCursor] = useState(true); // State to control cursor visibility
    const fullText = "Hello, I'm Zoe. "; // The text to type out
    const typingSpeed = 150; // Typing speed

    useEffect(() => {
        let index = 0;

        const interval = setInterval(() => {
            setText(fullText.slice(0, index + 1));
            index++;

            if (index === fullText.length) {
                clearInterval(interval); // Stop typing once full text is typed
            }
        }, typingSpeed);

        // Set a timeout to hide the cursor after 5 seconds
        const cursorTimeout = setTimeout(() => {
            setShowCursor(false); // Hide cursor after 5 seconds
        }, 5000);

        return () => {
            clearInterval(interval);
            clearTimeout(cursorTimeout); // Cleanup on unmount
        };
    }, []);

    return (
        <section className="about-section">
            <h2 className={`typewriter ${showCursor ? 'blinking' : ''}`}>{text}</h2>
            <div>
            <img src="/headshot.jpg" alt="Zoe Sano" className="headshot" />
            <p>
                I'm an Electrical Engineer with diverse interests. <br />
                My portfolio features my projects in RF engineering, cloud technologies, full-stack web development, and university coursework. <br />
                Please feel free to explore my portfolio to learn more about me, and reach out if you have any questions or opportunities!
            </p>
            </div>

        </section>
    );
};

export default About;
