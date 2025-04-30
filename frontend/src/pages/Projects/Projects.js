// frontend/src/components/Projects.js
import React from 'react';

const projectList = [
    {
        title: "YOLOv5 for Wildlife Monitoring",
        desc: "Optimized YOLOv5 for animal detection on 65K+ images with 60.6% mAP",
        link: "https://drive.google.com/file/d/1PZsjxCiglci_uzolrljLs6y1QD7Gwo1m/view",
    },
    {
        title: "Scheduling Tool Webpage",
        desc: "Collaborative availability platform using visual heatmap calendar",
        link: "https://finalexam-498940710021.us-central1.run.app/",
    },
    {
        title: "Robotic Job Coaching System",
        desc: "Android/iOS app with video call & robotic arm control",
        link: "https://www.youtube.com/watch?v=d33HXmhjfng",
    }
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