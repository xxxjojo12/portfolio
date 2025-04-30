import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar({ setShowContact }) {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <div className="nav-left">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/experience">Experience</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/resume">Resume</Link></li>
        </div>
        <div className="nav-right">
          <li>
            <button
              onClick={() => {
                setShowContact(true);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="contact-button"
            >
              Contact me
            </button>
          </li>
        </div>
      </ul>
    </nav>
  );
}


export default Navbar;
