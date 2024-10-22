// src/components/Resume.js
import React from 'react';
import './Resume.css'; // Importing the CSS file for styles

const Resume = () => {
    return (
        <section id="resume">

            <div className="resume-buttons">
                <a
                    href="/Zoe_Sano_Resume.pdf" // Linking to the resume file in the public folder
                    target="_blank" // Opens the resume in a new tab
                    rel="noopener noreferrer"
                    className="resume-button" // Adding class for styling
                >
                    View Resume
                </a>
                <br />
                <a
                    href="/Zoe_Sano_Transcript.pdf" // Same link for downloading
                    //download="Zoe_Sano_Resume.pdf" // Specifies the download attribute, decided to change this to transcript instead
                    target="_blank" // Opens the resume in a new tab
                    rel="noopener noreferrer"
                    className="resume-button" // Adding class for styling
                >
                    View Transcript
                </a>
            </div>
        </section>
    );
};

export default Resume;
