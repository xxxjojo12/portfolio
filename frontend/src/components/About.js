import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about-container">
      <div className="about-image">
        <img src="/main_image.jpeg" alt="Profile" />
      </div>
      <div className="about-text">
        <h2>About Me</h2>
        <p>
          Hi! I'm Hail (Ian) Lim, a Computer Science student at Michigan State University passionate about building scalable software solutions.
        </p>
        <p>
          Currently seeking opportunities to contribute to impactful WebDev/AI projects as a software engineer. Feel free to explore my work and get in touch.
        </p>
      </div>
    </section>
  );
}

export default About;
