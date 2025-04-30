import React, { useState } from 'react';

function Contact() {
  const [email, setEmail] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });
    alert('Message sent!');
    setEmail('');
  };

  return (
    <section id="contact">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Send</button>
      </form>
      <div style={{ marginTop: '1rem' }}>
        <p>Email: <a href="mailto:ianlim.dev@gmail.com">ianlim.dev@gmail.com</a></p>
        <p>Location: US</p>
      </div>
    </section>
  );
}

export default Contact;