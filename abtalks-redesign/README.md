# ABTalks Redesign

ABTalks Redesign is a full-stack web application built for the 60-Day Coding Challenge. It enables students to register, participate in daily coding challenges, track their progress, and earn certificates. Administrators can manage students, monitor submissions, and view analytics.

## Live Demo

Frontend:
https://abtalks-redesignfinal.netlify.app

Backend API:
https://abtalks-redesignfinal.onrender.com/docs

GitHub Repository:
https://github.com/praveensubb/ABTalks-Redesignfinal

---

## Features

### Student
- Student Registration
- Student Login
- Dashboard
- Daily Coding Challenge
- Profile
- Change Password
- Forgot Password
- Certificate Generation
- Leaderboard

### Admin
- Admin Login
- View Registered Students
- Search Students
- Edit Student Details
- Delete Student
- Reset Student Progress
- View Challenge Submissions
- Analytics Dashboard

---

## Tech Stack

### Frontend
- React.js
- Vite
- React Router
- Tailwind CSS

### Backend
- FastAPI
- SQLAlchemy
- SQLite
- Pydantic

### Deployment
- Frontend: Netlify
- Backend: Render

---

## Project Structure

```
ABTalks-Redesignfinal
│
├── abtalks-redesign
│   ├── src
│   ├── public
│   └── package.json
│
├── backend
│   ├── routes
│   ├── models.py
│   ├── schemas.py
│   ├── database.py
│   └── app.py
│
└── PROMPTS.md
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/praveensubb/ABTalks-Redesignfinal.git
```

### Frontend

```bash
cd abtalks-redesign
npm install
npm run dev
```

### Backend

```bash
cd backend

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt

uvicorn app:app --reload
```

---

## API Documentation

After running the backend:

```
http://127.0.0.1:8000/docs
```

Production:

```
https://abtalks-redesignfinal.onrender.com/docs
```

---

## AI Usage

This project was developed with AI assistance for:

- React component development
- FastAPI backend implementation
- Database integration
- Authentication
- API development
- Deployment
- Debugging
- UI improvements

The detailed AI interaction log is available in **PROMPTS.md**.

---

## License

This project was created for educational and hackathon purposes.
