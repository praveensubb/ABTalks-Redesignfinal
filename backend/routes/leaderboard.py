from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

import models
from database import get_db

router = APIRouter(
    prefix="/leaderboard",
    tags=["Leaderboard"]
)


@router.get("/")
def get_leaderboard(db: Session = Depends(get_db)):
    students = (
        db.query(models.Student)
        .order_by(
            models.Student.completed_days.desc(),
            models.Student.streak.desc()
        )
        .all()
    )

    leaderboard = []

    for index, student in enumerate(students, start=1):
        leaderboard.append({
            "rank": index,
            "name": student.name,
            "college": student.college,
            "completed_days": student.completed_days,
            "streak": student.streak
        })

    return leaderboard