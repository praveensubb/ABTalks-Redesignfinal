from fastapi import APIRouter, HTTPException
import schemas

router = APIRouter(
    prefix="/admin",
    tags=["Admin Authentication"]
)

ADMIN_USERNAME = "admin"
ADMIN_PASSWORD = "ABTalks@2026"


@router.post("/login")
def admin_login(admin: schemas.AdminLogin):

    if (
        admin.username == ADMIN_USERNAME
        and admin.password == ADMIN_PASSWORD
    ):
        return {
            "success": True,
            "message": "Admin Login Successful"
        }

    raise HTTPException(
        status_code=401,
        detail="Invalid username or password"
    )