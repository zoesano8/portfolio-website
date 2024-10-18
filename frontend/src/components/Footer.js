// src/components/Footer.js
import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer id="contact">
            <div className="contact-card">
                <h2>Contact Me</h2>
                <p>If you have any questions or would like to collaborate, please leave your information and a message. I'll get back to you as soon as possible!</p>

                {/* Contact Form */}
                <form>
                    <label htmlFor="name"></label>
                    <input type="text" id="name" name="name" placeholder="Name" required />

                    <label htmlFor="email"></label>
                    <input type="email" id="email" name="email" placeholder="Email" required />

                    <label htmlFor="message" className="message-label"></label>
                    <textarea id="message" name="message" rows="5" placeholder="Type your message here..." required></textarea>

                    <button type="submit"><p>Send</p></button>
                </form>
            </div>

            {/* Social Links */}
            <div className="socials">
                <h3>Find me on:</h3>
                <a href="https://www.linkedin.com/in/zoe-sano/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
                </a>
                <a href="https://github.com/zoesano8" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} className="social-icon" />
                </a>
            </div>

            {/* Copyright */}
            <div className="copyright">
                <p>&copy; 2024 Zoe Sano. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
