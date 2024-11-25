
def update_datetime_field(collection):
    try:
        result = collection.update_many(
            {"data_hora": {"$type": "string"}},
            [
                {
                    "$set": {
                        "data_hora": {"$toDate": "$data_hora"}
                    }
                }
            ]
        )
        print(f"{result.modified_count} documents updated with 'data_hora' as datetime.")
    except Exception as e:
        print(f"{e} error updating existing 'data_hora' to datetime")




def clean_duplicates(collection):
    duplicates = collection.aggregate([
        {
            "$group": {
                "_id": "$data_hora",
                "count": {"$sum": 1},
                "docs": {"$push": "$_id"}
            }
        },
        {
            "$match": {"count": {"$gt": 1}}
        }
    ])

    for d in duplicates:
        data_to_remove = d["docs"][1:]
        collection.delete_many({"_id": {"$in": data_to_remove}})
        print(f"removed duplicates for data_hora {d['_id']}")



def create_unique_index(collection):
    try:
        collection.create_index("data_hora", unique=True)
        print("unique index on 'data_hora' created with great success")
    except Exception as e:
        print(f"{e} error creating unique index")



def reorder_data(collection):
    try:
        all_data = list(collection.find().sort("data_hora", -1))
        collection.delete_many({})
        collection.insert_many(all_data)
        print("data reordered with great success based on 'data_hora' in descending order.")
    except Exception as e:
        print(f"{e} error reordering")
