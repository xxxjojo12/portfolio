# Portfolio Web Application

This repository contains a **Dockerized** portfolio web application built with **React** for the frontend and **Node.js + Express** for the backend. You can spin up both services with a single `docker-compose` command for seamless development and deployment.

---

## 📁 Directory Structure

- `portfolio/`
  - `backend/` (Express server)
    - `Dockerfile` — Backend Docker build instructions
    - `package.json` — Backend dependencies and scripts
    - `server.js` — Server entry point and routing
  - `frontend/` (React application using Create React App)
    - `Dockerfile` — Frontend Docker build (nginx)
    - `public/` — Static public files
    - `src/` — React components and entry point
    - `build/` — `npm run build` output
  - `docker-compose.yml` — Orchestrates frontend and backend containers

---

## 🚀 Tech Stack

- **Frontend**: React (Create React App)
- **Backend**: Node.js 16, Express 5
- **Static Server**: Nginx (serving built React files)
- **Containerization**: Docker, Docker Compose

---

## 🛠 Installation & Execution

1. Clone the repository and navigate into it:
   ```bash
   git clone <repository-url>
   cd portfolio
2. Build and start the services with Docker Compose:
   docker-compose up --build
3. Access the applications in your browser:
    Frontend: http://localhost:3000
4. To stop and remove containers:
   docker-compose down

