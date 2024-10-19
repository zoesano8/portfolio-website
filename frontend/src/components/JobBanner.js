import React, { useEffect, useState } from 'react';
import './JobBanner.css';

const jobDetails = [
    {
        title: "Electrical Engineer",
        logos: ["/mines-logo.png"]
    },
    {
        title: "AWS Cloud Practitioner",
        logos: ["/aws-logo.png"]
    },
    {
        title: "Fullstack Developer",
        logos: ["/html-logo.png", "/css-logo.png", "/js-logo.png", "/react-logo.png", "/python-logo.png"]
    },
    {
        title: "UI/UX Designer",
        logos: ["/uiux-logo.png"]
    }
];

const JobBanner = () => {
    const [index, setIndex] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            // First fade out
            setVisible(false);
            // Wait for the fade-out effect to finish before updating the title and logos
            setTimeout(() => {
                setIndex((prevIndex) => (prevIndex + 1) % jobDetails.length);
                setVisible(true); // Fade in after changing the content
            }, 1000); // Matches the duration of the CSS transition
        }, 5000); // Change title every 5 seconds

        return () => clearInterval(interval); // Cleanup on component unmount
    }, []);

    return (
        <div className="banner-container">
            <div className="banner">
                <div
                    className="title"
                    style={{
                        opacity: visible ? 1 : 0,
                        transform: visible ? "translateY(0)" : "translateY(10px)",
                    }}
                >
                    {jobDetails[index].title}
                </div>
                <div
                    className="logos-container"
                    style={{
                        opacity: visible ? 1 : 0,
                        transform: visible ? "translateY(0)" : "translateY(10px)",
                    }}
                >
                    {jobDetails[index].logos.map((logo, idx) => (
                        <img key={idx} className="logo" src={logo} alt={`${jobDetails[index].title} logo ${idx + 1}`} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default JobBanner;
