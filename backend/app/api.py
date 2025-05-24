from fastapi import FastAPI
from app.routes.board_routes import board_router

app = FastAPI()

app.include_router(board_router)