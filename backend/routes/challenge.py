from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

import models
import schemas
from database import get_db

router = APIRouter(
    prefix="/challenge",
    tags=["Challenge"]
)

@router.post("/submit")
def submit_challenge(
    challenge: schemas.ChallengeSubmit,
    db: Session = Depends(get_db)
):

    student = (
        db.query(models.Student)
        .filter(models.Student.id == challenge.student_id)
        .first()
    )

    if not student:
        raise HTTPException(
            status_code=404,
            detail="Student not found"
        )

    submission = models.ChallengeSubmission(
        student_id=challenge.student_id,
        day=challenge.day,
        github_link=challenge.github_link,
        linkedin_link=challenge.linkedin_link
    )

    db.add(submission)

    student.completed_days += 1
    student.streak += 1

    if student.rank > 1:
        student.rank -= 2

    db.commit()

    return {
        "message": "Challenge submitted successfully",
        "completed_days": student.completed_days,
        "streak": student.streak,
        "rank": student.rank
    }