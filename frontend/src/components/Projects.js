// frontend/src/components/Projects.js
import React from 'react';

const projectList = [
  { title: 'Project A', desc: 'explaination', link: '#' },
  { title: 'Project B', desc: 'explaination', link: '#' },
];

function Projects() {
  return (
    <section>
      <h2>Projects</h2>
      <ul>
        {projectList.map((p, i) => (
          <li key={i}>
            <a href={p.link}>{p.title}</a> – {p.desc}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;