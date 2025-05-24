from fastapi import APIRouter
from app.config.database import connect
from app.models.inprogress_models import InProgress

inprogress_router = APIRouter()

@inprogress_router.get("/")
async def start():
    return "Bem-vindo"