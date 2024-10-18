import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); // State to track menu open/closed

    const toggleMenu = () => {
        setIsOpen(!isOpen); // Toggle the menu state
    };

    // Effect to handle window resize and close menu on larger screens
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsOpen(false); // Close menu when screen is larger than 768px
            }
        };

        window.addEventListener('resize', handleResize); // Add event listener for resize (say went from small screen to big, make view from vert to horiz)
        return () => window.removeEventListener('resize', handleResize); // Cleanup on unmount
    }, []);

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <h1>Zoe Sano</h1>
            </div>
            <div className="navbar-hamburger" onClick={toggleMenu}>
                <span className="hamburger-icon">☰</span> {/* Hamburger icon */}
            </div>
            <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
                <li><a href="#about">About Me</a></li>
                <li><a href="#resume">Resume</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
