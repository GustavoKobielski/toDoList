from pydantic import BaseModel

class InProgress(BaseModel):
    inprogress_title: str
    inprogress_desc: str
    inprogress_author: str