from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

import models
from database import get_db

router = APIRouter(
    prefix="/certificate",
    tags=["Certificate"]
)


@router.get("/{student_id}")
def get_certificate(student_id: int, db: Session = Depends(get_db)):

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

    if student.completed_days < 60:
        raise HTTPException(
            status_code=403,
            detail="Certificate is locked. Complete 60 challenges first."
        )

    return {
        "name": student.name,
        "college": student.college,
        "track": student.track,
        "completed_days": student.completed_days,
        "message": "Congratulations! You have completed the 60-Day Coding Challenge."
    }