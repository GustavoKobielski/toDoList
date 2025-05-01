from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

card = {
    1: {
        "title": "Criar API",
        "description": "API utilizando fastapi",
        "author": "Vinicius",
    },
    2: {
        "title": "Merge",
        "description": "Branch Teste",
        "author": "Gustavo",
    }
}

users = []

class User(BaseModel):
    name: str
    email: str
    password: str


@app.get("/")
def initial():
    return card 

@app.get("/get-card/{id_card}")
def get_card(id_card:int):
    return card[id_card]

@app.post("/post-user")
async def create_user(user: User):
    users.append(user)
    print(users)
    return users
