// frontend/src/components/Contact.js
import React, { useState } from 'react';

function Contact() {
  const [email, setEmail] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    // example of calling backend API
    fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    });
    alert('Sent!');
  };

  return (
    <section>
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="iamlim.dev@gmail.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
