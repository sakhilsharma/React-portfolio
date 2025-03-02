import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isDark, setIsDark] = useState(true);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleTheme = () => {
        setIsDark(!isDark);
        document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
    };

    return (
        <div className="navbar">
            <div className="navbar-title">
                Portfolio
            </div>
            
            {/* Hamburger Menu Button */}
            <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>

            {/* Navigation Links */}
            <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
                <NavLink to="/" end onClick={toggleMenu}>Home</NavLink>
                <NavLink to="/about" onClick={toggleMenu}>About</NavLink>
                <NavLink to="/projects" onClick={toggleMenu}>Projects</NavLink>
                <NavLink to="/experience" onClick={toggleMenu}>Experience</NavLink>
                <NavLink to="/skills" onClick={toggleMenu}>Skills</NavLink>
                <NavLink to="/contact" onClick={toggleMenu}>Contact</NavLink>
                
                {/* Theme toggle moved inside navbar-links */}
                <button className="theme-toggle" onClick={toggleTheme}>
                    {isDark ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg>
                    )}
                </button>
            </div>
        </div>
    );
}