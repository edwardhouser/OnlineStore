import Product from "../components/product";
import "./Catalog.css"

const mockData = [
    {
        "title" : "Monoammonium Phosphate";
        "price" : 124.99
        "category" : ""
        "image" : ""
        "_id" : "00001"
    },
    {   "title" : "Monopotassium Phosphate";
        "price" : 124.99
        "category" : ""
        "image" : ""
        "_id" : "00001"
    },
    {   "title" : "Zinc Sulfate";
        "price" : 124.99
        "category" : ""
        "image" : ""
        "_id" : "00001"
    },
    {   "title" : "Manganese Sulfate";
        "price" : 124.99
        "category" : ""
        "image" : ""
        "_id" : "00001"
    },
    {   "title" : "Epsom Salt";
        "price" : 124.99
        "category" : ""
        "image" : ""
        "_id" : "00001"
    },
    {   "title" : "";
        "price" : 124.99
        "category" : ""
        "image" : ""
        "_id" : "00001"
    },
    {   "title" : "";
        "price" : 124.99
        "category" : ""
        "image" : ""
        "_id" : "00001"
    },
    {   "title" : "";
        "price" : 124.99
        "category" : ""
        "image" : ""
        "_id" : "00001"
    },

]

function Catalog(){
    return(
    <div className="catalog">
        <h1> Our Products </h1>
            <div className="list"> 
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            </div>

    </div>
    );
}

export default Catalog;
