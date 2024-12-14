import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
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
                <NavLink to="/skills" onClick={toggleMenu}>Skills</NavLink>
                <NavLink to="/contact" onClick={toggleMenu}>Contact</NavLink>
            </div>
        </div>
    );
}