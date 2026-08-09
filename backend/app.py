from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# Database
from database import Base, engine
import models

# Routes
from routes.auth import router as auth_router
from routes.challenge import router as challenge_router
from routes.student import router as student_router
from routes.leaderboard import router as leaderboard_router
from routes.certificate import router as certificate_router
from routes.admin import router as admin_router
from routes.admin_auth import router as admin_auth_router

# ----------------------------------
# Create Database Tables
# ----------------------------------
Base.metadata.create_all(bind=engine)

# ----------------------------------
# Create FastAPI App
# ----------------------------------
app = FastAPI(
    title="ABTalks Backend API",
    description="Backend API for ABTalks 60-Day Coding Challenge",
    version="1.0.0"
)

# ----------------------------------
# CORS Configuration
# ----------------------------------
origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
    "https://abtalks-redesignfinal.netlify.app",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ----------------------------------
# Register Routes
# ----------------------------------
app.include_router(auth_router)
app.include_router(challenge_router)
app.include_router(student_router)
app.include_router(leaderboard_router)
app.include_router(certificate_router)
app.include_router(admin_router)
app.include_router(admin_auth_router)

# ----------------------------------
# Home Route
# ----------------------------------
@app.get("/")
def home():
    return {
        "message": "Welcome to ABTalks Backend 🚀",
        "status": "Running"
    }

# ----------------------------------
# Health Check
# ----------------------------------
@app.get("/health")
def health():
    return {
        "status": "OK",
        "database": "Connected"
    }

# ----------------------------------
# API Information
# ----------------------------------
@app.get("/api")
def api_info():
    return {
        "project": "ABTalks 60-Day Coding Challenge",
        "backend": "FastAPI",
        "database": "SQLite",
        "version": "1.0.0",
        "available_routes": [
            "/",
            "/health",
            "/api",
            "/docs",

            "/auth/register",
            "/auth/login",
            "/auth/change-password",

            "/challenge/submit",

            "/student/{student_id}",

            "/leaderboard",

            "/certificate/{student_id}",

            "/admin/login",
            "/admin/dashboard",
            "/admin/student/{student_id}",
            "/admin/student/{student_id}/reset",
            "/admin/submissions",
            "/admin/analytics"
        ]
    }