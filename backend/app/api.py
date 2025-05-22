from fastapi import FastAPI
from app.routes.boardR import board_router

app = FastAPI()

app.include_router(board_router)