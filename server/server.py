from flask import Flask, request
import json
from config import db

app = Flask(__name__)

products = []

#this is an endpoint
@app.get("/")
def home():
    return "Hello from the Flask"

@app.get("/about")
def about():
    return("Hello from the about page")

@app.get("/about")
def info():
    name = {"name":"Edward Houser"}
    return json.dumps(name)

def fix_id(obj):
    obj["_id"] = str(obj["_id"])
    return obj

@app.get("/api/products")
def get_products():
    products_db = []
    cursor = db.products.find({})
    for product in cursor:
        print("product ", product)
        products_db.append(fix_id(product))
    return json.dumps(products_db)

@app.post("/api/products")
def post_products():
    product = request.get_json()
    #products.append(product)
    db.products.insert_one(product)
    print(product)
    return "product saved"

@app.put("/api/products/<int:index>")
def put_products(index):
    updatedProduct = request.get_json()
    if 0<= index < len(products):
        products[index] = updatedProduct
        return json.dumps(updatedProduct)
    else:
        return "that index does not exist"
    
# just remember that to delete an element from a list, you need to use -pop
@app.delete("/api/products/<int:index>")
def deleted_products(index):
    deletedProduct = request.get_json()
    if 0 <= index < len(products):
        deletedProduct = products.pop(index)
        return json.dumps(deletedProduct)
    else:
        return "that index does not exist"

@app.patch("/api/products/<int:index>")
def patch_products(index):
    patchProducts = request.get_json()
    if 0<= index < len(products):
        products[index].update(patchProducts)
        return json.dumps(patchProducts)
    else:
        return "That index does not exist"
        


app.run(debug=True)