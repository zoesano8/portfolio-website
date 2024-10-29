// src/components/Footer.js
import React from 'react';
import Resume from './Resume';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer id="contact">
            <div class="contact-cards-container">
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

            {/* Resume links */}
            <div className="contact-card">
                <h2>Professional Documents</h2>
                <p>View my resume and college transcript here</p>
                <span class="material-symbols-outlined">arrow_downward</span> <br />

                <section id="resume">
                    <Resume />
                    <br />
                </section>
                <section id="certifications">
                    <p>List of Certifications</p>
                    <span class="material-symbols-outlined">arrow_downward</span> <br />
                    <ul class="certification-links">
                        <li><a href="https://www.credly.com/badges/f060837a-7b52-46e7-b42b-3debb49ff6c2/linked_in_profile" target="_blank" rel="noopener noreferrer">AWS Certified Cloud Practitioner</a></li>
                        <li><a href="https://www.keysight.com/us/en/lib/resources/miscellaneous/industryready-student-listing--colorado-school-of-mines-2713007.html" target="_blank" rel="noopener noreferrer">Keysight ADS</a></li>
                        <li><a href="https://www.credly.com/users/zoe-sano" target="_blank" rel="noopener noreferrer">Meta & Google Certifications</a></li>
                    </ul>
                </section>

            </div>

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
