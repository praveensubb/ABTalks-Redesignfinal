from fastapi import APIRouter, Depends, HTTPException, Query, Body
from sqlalchemy.orm import Session

import models
import schemas
from database import get_db

router = APIRouter(
    prefix="/admin",
    tags=["Admin"]
)

# ------------------------------------
# Admin Login
# ------------------------------------

ADMIN_USERNAME = "admin"
ADMIN_PASSWORD = "admin123"


@router.post("/login")
def admin_login(data: schemas.AdminLogin):

    if (
        data.username != ADMIN_USERNAME
        or data.password != ADMIN_PASSWORD
    ):
        raise HTTPException(
            status_code=401,
            detail="Invalid Admin Username or Password"
        )

    return {
        "success": True,
        "message": "Admin Login Successful"
    }


# ------------------------------------
# Admin Dashboard
# ------------------------------------

@router.get("/dashboard")
def admin_dashboard(
    search: str = Query(default=""),
    db: Session = Depends(get_db)
):

    query = db.query(models.Student)

    if search:
        query = query.filter(
            models.Student.name.contains(search)
        )

    students = query.all()

    total_students = len(students)

    total_completed = sum(
        student.completed_days
        for student in students
    )

    return {
        "total_students": total_students,
        "total_completed_challenges": total_completed,
        "students": students
    }
    # ------------------------------------
# Delete Student
# ------------------------------------

@router.delete("/student/{student_id}")
def delete_student(
    student_id: int,
    db: Session = Depends(get_db)
):

    student = (
        db.query(models.Student)
        .filter(models.Student.id == student_id)
        .first()
    )

    if not student:
        raise HTTPException(
            status_code=404,
            detail="Student not found"
        )

    db.delete(student)
    db.commit()

    return {
        "success": True,
        "message": "Student deleted successfully"
    }


# ------------------------------------
# Update Student
# ------------------------------------

@router.put("/student/{student_id}")
def update_student(
    student_id: int,
    updated_data: dict = Body(...),
    db: Session = Depends(get_db)
):

    student = (
        db.query(models.Student)
        .filter(models.Student.id == student_id)
        .first()
    )

    if not student:
        raise HTTPException(
            status_code=404,
            detail="Student not found"
        )

    student.name = updated_data.get("name", student.name)
    student.email = updated_data.get("email", student.email)
    student.college = updated_data.get("college", student.college)
    student.track = updated_data.get("track", student.track)

    db.commit()
    db.refresh(student)

    return {
        "success": True,
        "message": "Student updated successfully",
        "student": student
    }


# ------------------------------------
# Reset Student Progress
# ------------------------------------

@router.put("/student/{student_id}/reset")
def reset_student_progress(
    student_id: int,
    db: Session = Depends(get_db)
):

    student = (
        db.query(models.Student)
        .filter(models.Student.id == student_id)
        .first()
    )

    if not student:
        raise HTTPException(
            status_code=404,
            detail="Student not found"
        )

    student.completed_days = 0
    student.streak = 0
    student.rank = 1000

    db.commit()
    db.refresh(student)

    return {
        "success": True,
        "message": "Student progress reset successfully",
        "student": student
    }
    # ------------------------------------
# View All Challenge Submissions
# ------------------------------------

@router.get("/submissions")
def get_all_submissions(
    db: Session = Depends(get_db)
):

    submissions = db.query(models.ChallengeSubmission).all()

    result = []

    for submission in submissions:

        student = (
            db.query(models.Student)
            .filter(models.Student.id == submission.student_id)
            .first()
        )

        result.append({
            "id": submission.id,
            "student_name": student.name if student else "Unknown",
            "student_email": student.email if student else "",
            "day": submission.day,
            "github_link": submission.github_link,
            "linkedin_link": submission.linkedin_link,
            "status": submission.status
        })

    return result


# ------------------------------------
# Analytics
# ------------------------------------

@router.get("/analytics")
def analytics(
    db: Session = Depends(get_db)
):

    students = db.query(models.Student).all()

    total_students = len(students)

    completed_challenges = sum(
        student.completed_days
        for student in students
    )

    highest_streak = max(
        (student.streak for student in students),
        default=0
    )

    certificates = len([
        student
        for student in students
        if student.completed_days >= 60
    ])

    average_progress = (
        completed_challenges / total_students
        if total_students > 0
        else 0
    )

    top_students = sorted(
        students,
        key=lambda s: s.completed_days,
        reverse=True
    )[:5]

    return {
        "total_students": total_students,
        "completed_challenges": completed_challenges,
        "highest_streak": highest_streak,
        "certificates": certificates,
        "average_progress": average_progress,
        "top_students": [
            {
                "id": student.id,
                "name": student.name,
                "email": student.email,
                "college": student.college,
                "track": student.track,
                "completed_days": student.completed_days,
                "streak": student.streak,
                "rank": student.rank
            }
            for student in top_students
        ]
    }