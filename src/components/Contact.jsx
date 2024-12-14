import "./Contact.css";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function Contact() {
    const particlesInit = useCallback(async engine => {
        await loadSlim(engine);
    }, []);

    return (
        <div className="contact-wrapper">
            {/* Particles Background */}
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
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 1,
                            },
                            repulse: {
                                distance: 100,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#ffffff",
                        },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: true,
                            opacity: 0.2,
                            width: 1,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 2,
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
                            value: 0.2,
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

            {/* Contact Content */}
            <div className="contact-container">
                <h2>Get In Touch</h2>
                
                <div className="contact-content">
                {/* Contact Info Section */}
                <div className="contact-info">
                    <div className="contact-item">
                        <div className="icon">📧</div>
                        <div className="info">
                            <h3>Email</h3>
                            <a href="mailto:sakhilsharma123@gmial.com">sakhilsharma123@gmial.com</a>
                            <a href="mailto:23dec020@nith.ac.in">23dec020@nith.ac.in</a>
                        </div>
                    </div>

                    <div className="contact-item">
                        <div className="icon">📱</div>
                        <div className="info">
                            <h3>Phone</h3>
                            <a href="tel:+91 9317925652">+91 9317925652</a>
                        </div>
                    </div>

                    <div className="contact-item">
                        <div className="icon">📍</div>
                        <div className="info">
                            <h3>Location</h3>
                            <p>Hamirpur, Himachal Pradesh</p>
                        </div>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="social-links">
                        <h3>Connect With Me</h3>
                        <div className="social-icons">
                            <a href="https://github.com/sakhilsharma" target="_blank" rel="" className="social-icon github">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="www.linkedin.com/in/sakhil-sharma-developer" target="_blank" rel="" className="social-icon linkedin">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a href="https://www.instagram.com/_.sakhil_04" target="_blank" rel="" className="social-icon instagram">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}