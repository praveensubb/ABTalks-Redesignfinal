from pydantic import BaseModel, EmailStr


# ------------------------------------
# Student Registration
# ------------------------------------
class StudentCreate(BaseModel):
    name: str
    email: EmailStr
    college: str
    track: str
    password: str


# ------------------------------------
# Student Login
# ------------------------------------
class StudentLogin(BaseModel):
    email: EmailStr
    password: str


# ------------------------------------
# Student Response
# ------------------------------------
class StudentResponse(BaseModel):
    id: int
    name: str
    email: EmailStr
    college: str
    track: str
    completed_days: int
    streak: int
    rank: int

    class Config:
        from_attributes = True


# ------------------------------------
# Challenge Submission
# ------------------------------------
class ChallengeSubmit(BaseModel):
    student_id: int
    day: int
    github_link: str
    linkedin_link: str


# ------------------------------------
# Admin Login
# ------------------------------------
class AdminLogin(BaseModel):
    username: str
    password: str


# ------------------------------------
# Change Password
# ------------------------------------
class ChangePassword(BaseModel):
    student_id: int
    old_password: str
    new_password: str
# ------------------------------------
# Forgot Password
# ------------------------------------
class ForgotPassword(BaseModel):
    email: EmailStr
    new_password: str