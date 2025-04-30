import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar({ setShowContact }) {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <nav className="navbar">
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <img
          src={menuOpen ? '/close-icon.png' : '/menu-icon.png'}
          alt="menu"
          className="menu-icon"
        />
      </div>
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link></li>
        <li><Link to="/experience" onClick={() => setMenuOpen(false)}>Experience</Link></li>
        <li><Link to="/skills" onClick={() => setMenuOpen(false)}>Skills</Link></li>
        <li><Link to="/resume" onClick={() => setMenuOpen(false)}>Resume</Link></li>
        <li>
          <button
            onClick={() => {
              setShowContact(true);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="contact-button"
          >
            Contact Me
          </button>
        </li>
      </ul>
    </nav>
  );
}


export default Navbar;
