// backend/server.js
const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/contact', (req, res) => {
  console.log('Contact Request:', req.body);
  res.json({ status: 'OK' });
});

app.use(express.static(path.join(__dirname, '../frontend/build')));

app.get('/{*any}', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});