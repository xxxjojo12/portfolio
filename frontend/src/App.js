import React, { useState } from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Experience from './pages/Experience/Experience';
import Skills from './pages/Skills/Skills';
import Resume from './pages/Resume/Resume';
import Contact from './pages/Contact/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  const [showContact, setShowContact] = useState(false);

  return (
    <Router>
      <Header /> {/* Fixed for every page */}
      <Navbar setShowContact={setShowContact} />
      <Routes>
        <Route
          path="/"
          element={<About showContact={showContact} setShowContact={setShowContact} />}
        />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {showContact && (
        <div className="contact-popup">
          <div className="contact-header">
            <h3>Contact Me</h3>
            <button className="close-btn" onClick={() => setShowContact(false)}>×</button>
          </div>
          <form className="contact-form">
            <label>Your Name</label>
            <input type="text" placeholder="Enter name" />
            <label>Your Email</label>
            <input type="email" placeholder="Enter email" />
            <label>Your Message</label>
            <textarea rows="5" placeholder="Enter your message" />
            <button type="submit">Send Message ✉️</button>
          </form>
        </div>
      )}
    </Router>
  );
}

export default App;
