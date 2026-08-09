from sqlalchemy import Column, Integer, String, ForeignKey
from database import Base


class Student(Base):
    __tablename__ = "students"

    id = Column(Integer, primary_key=True, index=True)

    name = Column(String, nullable=False)

    email = Column(String, unique=True, index=True)

    college = Column(String)

    track = Column(String)

    password = Column(String)

    completed_days = Column(Integer, default=0)

    streak = Column(Integer, default=0)

    rank = Column(Integer, default=1000)


class ChallengeSubmission(Base):
    __tablename__ = "challenge_submissions"

    id = Column(Integer, primary_key=True, index=True)

    student_id = Column(Integer, ForeignKey("students.id"))

    day = Column(Integer)

    github_link = Column(String)

    linkedin_link = Column(String)

    status = Column(String, default="Completed")