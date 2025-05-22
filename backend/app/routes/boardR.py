from fastapi import APIRouter
from app.config.database import connect
from app.models.board import Board

board_router = APIRouter()

@board_router.get("/")
async def start():
    return "Bem-vindo"
