from fastapi import APIRouter
from app.config.database import connect
from app.models.inprogress_models import InProgress
from app.schemas.inprogress_schemas import inprogressEntity, listInprogressEntity
from bson import ObjectId

inprogress_router = APIRouter()

@inprogress_router.get('/')
async def start():
    return "Bem-vindo"

@inprogress_router.get('/inprogress')
async def list_inprogress():
    return listInprogressEntity(connect.local.inprogress.find())

# Find
@inprogress_router.get('/inprogress/{inprogress_id}')
def find_inprogress_id(inprogress_id):
    return inprogressEntity(
        connect.local.inprogress.find_one(
            {"_id": ObjectId(inprogress_id)}
        )
    )

# Create 
@inprogress_router.post('/inprogress')
async def create_inprogress(inprogress: InProgress):
    connect.local.inprogress.insert_one(dict(inprogress))
    return listInprogressEntity(connect.local.inprogress.find())

# Update
@inprogress_router.put('/inprogress/{inprogress_id}')
async def update_inprogress(inprogress_id, inprogress: InProgress):
    connect.local.inprogress.find_one_and_update(
        {
            "_id": ObjectId(inprogress_id)
        },
        {
            "$set": dict(inprogress)
        }
    )
    return inprogressEntity(
        connect.local.inprogress.find_one(
            {
                "_id": ObjectId(inprogress_id)
            }
        )
    )

# Delete

@inprogress_router.delete('/inprogress/{inprogress_id}')
async def delete_inprogress(inprogress_id):
    return inprogressEntity(
        connect.local.inprogress.find_one_and_delete(
            {
                "_id": ObjectId(inprogress_id)
            }
        )
    )