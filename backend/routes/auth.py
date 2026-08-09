from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

import models
import schemas
from database import get_db

router = APIRouter(
    prefix="/auth",
    tags=["Authentication"]
)

# ------------------------------------
# Register
# ------------------------------------
@router.post("/register")
def register(
    student: schemas.StudentCreate,
    db: Session = Depends(get_db)
):

    existing_user = (
        db.query(models.Student)
        .filter(models.Student.email == student.email)
        .first()
    )

    if existing_user:
        raise HTTPException(
            status_code=400,
            detail="Email already registered."
        )

    new_student = models.Student(
        name=student.name,
        email=student.email,
        college=student.college,
        track=student.track,
        password=student.password
    )

    db.add(new_student)
    db.commit()
    db.refresh(new_student)

    return {
        "message": "Registration Successful",
        "student_id": new_student.id
    }


# ------------------------------------
# Login
# ------------------------------------
@router.post("/login")
def login(
    student: schemas.StudentLogin,
    db: Session = Depends(get_db)
):

    user = (
        db.query(models.Student)
        .filter(models.Student.email == student.email)
        .first()
    )

    if not user:
        raise HTTPException(
            status_code=404,
            detail="User not found."
        )

    if user.password != student.password:
        raise HTTPException(
            status_code=401,
            detail="Incorrect password."
        )

    return {
        "message": "Login Successful",
        "student": {
            "id": user.id,
            "name": user.name,
            "email": user.email,
            "college": user.college,
            "track": user.track,
            "completed_days": user.completed_days,
            "streak": user.streak,
            "rank": user.rank
        }
    }


# ------------------------------------
# Change Password
# ------------------------------------
@router.put("/change-password")
def change_password(
    data: schemas.ChangePassword,
    db: Session = Depends(get_db)
):

    student = (
        db.query(models.Student)
        .filter(models.Student.id == data.student_id)
        .first()
    )

    if not student:
        raise HTTPException(
            status_code=404,
            detail="Student not found."
        )

    if student.password != data.old_password:
        raise HTTPException(
            status_code=400,
            detail="Old password is incorrect."
        )

    student.password = data.new_password

    db.commit()
    db.refresh(student)

    return {
        "success": True,
        "message": "Password changed successfully."
    }