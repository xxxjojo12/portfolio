import React from 'react';

function Resume() {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>My Resume</h2>
      <iframe
        src="/Hail_Lim_Resume.pdf"
        title="Resume"
        width="100%"
        height="800px"
        style={{ border: 'none' }}
      ></iframe>
    </div>
  );
}

export default Resume;
