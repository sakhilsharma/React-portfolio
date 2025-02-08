import { useEffect } from 'react';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";
import './home.css';

export default function Home() {
    const particlesInit = useCallback(async engine => {
        await loadSlim(engine);
    }, []);

    useEffect(() => {
        const typed = new Typed('.animate', {
            strings: ['Web Developer', "MERN Stack Developer", "Electronics Student"],
            typeSpeed: 100,
            backSpeed: 50,
            loop: true
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div className="home-wrapper">
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                    background: {
                        color: {
                            value: "transparent",
                        },
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                            },
                            onHover: {
                                enable: true,
                                mode: "bubble",
                            },
                            resize: true,
                        },
                        modes: {
                            bubble: {
                                distance: 200,
                                duration: 2,
                                opacity: 0.8,
                                size: 8,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#ffffff",
                        },
                        links: {
                            enable: false,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: true,
                            speed: 1,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.3,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 5 },
                        },
                    },
                    detectRetina: true,
                }}
            />

            <div className="home-container">
                <div className="image-section">
                    <div className="image-container">
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img src="image2.jpg" alt="profile" />
                                </div>
                                <div className="flip-card-back">
                                    <img src="pic.png" alt="profile-back" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <h2>SAKHIL SHARMA</h2>
                    <p>I'm A <span className="animate"></span></p>
                    <div className="resume-section">
                        <a 
                            href="Resume.pdf" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="resume-button"
                        >
                            <i className="fas fa-file-pdf"></i>  Resume
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}