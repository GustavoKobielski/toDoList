from pydantic import BaseModel

class Board(BaseModel):
    board_title: str
    board_desc: str
    board_author: str