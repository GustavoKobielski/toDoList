def inprogressEntity(db_item) -> dict:
    return {
        "id": str(db_item['_id']),
        "title": (db_item['inprogress_title']),
        "desc": (db_item['inprogress_desc']),
        "author": (db_item['inprogress_author'])
    }

def listInprogressEntity(db_item_list) -> list:
    list_inprogress = []
    for item in db_item_list:
        list_inprogress.append(inprogressEntity(item))
    return list_inprogress