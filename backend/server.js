// backend/server.js
const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// 1) API 예시
app.post('/api/contact', (req, res) => {
  console.log('Contact 요청:', req.body);
  res.json({ status: 'OK' });
});

// 2) React 빌드 결과물(static 파일) 서빙
app.use(express.static(path.join(__dirname, '../frontend/build')));

// 3) 나머지 모든 요청은 React 앱의 index.html 로
app.get('/{*any}', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});