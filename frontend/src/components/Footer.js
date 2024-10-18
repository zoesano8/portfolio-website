// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer id="contact">
            <h2>Contact Me</h2>

            {/* Contact Form */}
            <form>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" rows="5" required></textarea>

                <button type="submit">Send</button>
            </form>

            {/* Social Links */}
            <div className="socials">
                <h3>Find me on:</h3>
                <a href="https://www.linkedin.com/in/zoe-sano/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com/zoesano8" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>

            <p>&copy; 2024 Zoe Sano. All Rights Reserved.</p>
        </footer>
    );
};

export default Footer;
