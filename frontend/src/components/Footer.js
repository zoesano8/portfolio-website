import React, { useState } from 'react'; // Import useState
import Resume from './Resume';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFutbol } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    // Step 1: Set up state management for form inputs
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [responseMessage, setResponseMessage] = useState('');

    // Step 2: Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Step 3: Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission
        try {
            const response = await fetch('http://127.0.0.1:8000/contact/', { // Replace with your actual backend URL
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            if (response.ok) {
                setResponseMessage('Message sent successfully!');
            } else {
                setResponseMessage('Error sending message: ' + data.error);
            }
        } catch (error) {
            setResponseMessage('Error sending message: ' + error.message);
        }
    };

    return (
        <footer id="contact">
            <div className="contact-cards-container">
                <div className="contact-card">
                    <h2>Contact Me</h2>
                    <p>If you have any questions or would like to collaborate, please leave your information and a short message. I'll get back to you as soon as possible!</p>

                    {/* Contact Form */}
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name"></label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleChange} // Step 2: Handle change
                            required
                        />

                        <label htmlFor="email"></label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange} // Step 2: Handle change
                            required
                        />

                        <label htmlFor="message" className="message-label"></label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            placeholder="Type your message here..."
                            value={formData.message}
                            onChange={handleChange} // Step 2: Handle change
                            required
                        ></textarea>

                        <button type="submit"><p>Send</p></button>
                    </form>

                    {/* Step 4: Display response message */}
                    {responseMessage && (
                        <div className="response-message">
                            {responseMessage}
                        </div>
                    )}
                </div>

                {/* Resume links */}
                <div className="contact-card">
                    <h2>Professional Documents</h2>
                    <p>View my resume and college transcript here</p>
                    <span className="material-symbols-outlined">arrow_downward</span> <br />

                    <section id="resume">
                        <Resume />
                        <br />
                    </section>
                    <section id="certifications">
                        <p>List of Certifications</p>
                        <span className="material-symbols-outlined">arrow_downward</span> <br />
                        <ul className="certification-links">
                            <li><a href="https://www.credly.com/badges/f060837a-7b52-46e7-b42b-3debb49ff6c2/linked_in_profile" target="_blank" rel="noopener noreferrer">AWS Certified Cloud Practitioner</a></li>
                            <li><a href="https://www.keysight.com/us/en/lib/resources/miscellaneous/industryready-student-listing--colorado-school-of-mines-2713007.html" target="_blank" rel="noopener noreferrer">Keysight ADS - Industry Ready Student</a></li>
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
                <a href="https://minesathletics.com/sports/womens-soccer/roster/zoe-sano/11322" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFutbol} className="social-icon" />
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
