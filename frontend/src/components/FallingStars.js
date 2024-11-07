import React, { useEffect } from 'react';

const ShootingStars = () => {
    useEffect(() => {
        const canvas = document.getElementById('shootingStarsCanvas');
        const ctx = canvas.getContext('2d');

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const shootingStars = [];

        const createShootingStars = () => {
            for (let i = 0; i < 20; i++) { // Create shooting stars
                shootingStars.push({
                    x: Math.random() * canvas.width, // Random start position
                    y: Math.random() * canvas.height * 0.5, // Start from the upper half of the canvas
                    speed: Math.random() + 0.4, // Slower speed
                    active: false,
                    opacity: 1,
                });
            }
        };

        // Function to draw star shape
        const drawStar = (x, y, radius, points) => {
            ctx.save();
            ctx.beginPath();
            ctx.translate(x, y); // Move to the star position
            ctx.moveTo(0, 0 - radius);

            for (let i = 0; i < points; i++) {
                ctx.rotate(Math.PI / points); // Rotate for star points
                ctx.lineTo(0, 0 - (radius * 0.5)); // Inner point
                ctx.rotate(Math.PI / points); // Rotate for the next outer point
                ctx.lineTo(0, 0 - radius); // Outer point
            }

            ctx.closePath();
            ctx.fillStyle = 'white';
            ctx.globalAlpha = 1; // Full opacity
            ctx.fill();
            ctx.restore();
        };

        const updateShootingStars = () => {
            shootingStars.forEach((star) => {
                if (!star.active) {
                    if (Math.random() < 0.02) { // Random chance to activate shooting star
                        star.x = Math.random() * canvas.width; // Random start position
                        star.y = Math.random() * canvas.height * 0.7; // Start from the upper half of the canvas
                        star.active = true; // Activate shooting star
                        star.opacity = 1; // Reset opacity
                    }
                } else {
                    star.x += star.speed; // Move diagonally to the right
                    star.y += star.speed * 0.3; // Move downwards more slowly
                    star.opacity -= 0.01; // Decrease opacity for fade-out effect

                    // Reset shooting star when it goes off screen or faded out
                    if (star.y > canvas.height || star.opacity <= 0) {
                        star.active = false;
                    }
                }
            });
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
            updateShootingStars();
            shootingStars.forEach((star) => {
                if (star.active) drawStar(star.x, star.y, 10, 5); // Draw active shooting stars
            });
            requestAnimationFrame(animate);
        };

        createShootingStars();
        animate();

        return () => {
            cancelAnimationFrame(animate);
        };
    }, []);

    return <canvas id="shootingStarsCanvas" style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }} />;
};

export default ShootingStars;
