import fastapi
from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse
import pymysql

app = FastAPI()


class DataBase(object):
    def __new__(cls):
        if not hasattr(cls, 'instance'):
            cls.instance = super(DataBase, cls).__new__(cls)
        return cls.instance

    def __init__(self):
        self.connection = None
        self.cursor = None
        self.__connect()

    def __connect(self):
        self.connection = pymysql.connect(
            host='localhost',
            port=3306,
            user='root',
            password='MySQL_2024',
            database='mydb',
        )
        self.cursor = self.connection.cursor(pymysql.cursors.DictCursor)

    def execute(self, command):
        self.cursor.execute(command)
        result = self.cursor.fetchall()
        self.connection.commit()
        return result


@app.get("/api/allrequest")
async def get_request():
    db = DataBase()
    return JSONResponse(db.execute('SELECT * FROM request'))


@app.get("/api/allmedia")
async def get_media():
    db = DataBase()
    return JSONResponse(db.execute('SELECT * FROM media'))


@app.get('/api/user/{id}')
def get_user_by_id(id):
    db = DataBase()
    result = db.execute(f'SELECT * FROM user WHERE id={id}')
    if not result:
        raise fastapi.HTTPException(status_code=404)
    return JSONResponse(result)


@app.get('/api/media/{id}')
def get_media_by_id(id):
    db = DataBase()
    result = db.execute(f'SELECT * FROM media WHERE id={id}')
    if not result:
        raise fastapi.HTTPException(status_code=404)
    return JSONResponse(result)


@app.post('/api/addrequest', status_code=201)
async def add_new_request(req: Request):
    req_dict = await req.json()
    try:
        id = req_dict['id']
        name = req_dict['name']
        description = req_dict['description']
        created = req_dict['created']
        media_id = req_dict['media_id']
        user_id = req_dict['user_id']
    except KeyError:
        raise fastapi.HTTPException(status_code=400, detail="Missing required fields")

    db = DataBase()
    try:
        db.execute(
            f"INSERT INTO `request` (`id`, `name`, `description`, `created`, `media_id`, `user_id`) "
            f"VALUES ({id}, '{name}', '{description}', '{created}', {media_id}, {user_id});"
        )
    except Exception as e:
        raise fastapi.HTTPException(status_code=500, detail=str(e))

    return {'message': 'New request added!'}


@app.put('/api/updatemedia/{id}')
async def update_media(id, req: Request):
    req_dict = await req.json()
    db = DataBase()
    for key in req_dict:
        if not db.execute(f'SELECT * FROM media WHERE id={id}'):
            raise fastapi.HTTPException(status_code=404)
        db.execute(f"UPDATE media SET {key}='{req_dict[key]}' WHERE id={id}")
    return {"message": f'Media {id} was successfully updated!'}


@app.delete('/api/deletemedia/{id}')
def delete_media(id):
    db = DataBase()
    if not db.execute(f'SELECT * FROM media WHERE id={id}'):
        raise fastapi.HTTPException(status_code=404)
    db.execute(f"DELETE FROM `media` WHERE id={id}")
    return {'message': f'Media with id {id} has been deleted'}