from fastapi import FastAPI
from app.routes.inprogress_routes import inprogress_router

app = FastAPI()

app.include_router(inprogress_router)