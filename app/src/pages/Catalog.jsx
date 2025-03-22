import Product from "../components/product";
import "./Catalog.css"

const mockData = [
    {
        "title" : "Monoammonium Phosphate",
        "price" : 124.99,
        "category" : "Phosphates",
        "image" : "",
        "_id" : "00001",
    },
    {   "title" : "Monopotassium Phosphate",
        "price" : 124.99,
        "category" : "Phosphates",
        "image" : "",
        "_id" : "00002",
    },
    {   "title" : "Zinc Sulfate",
        "price" : 124.99,
        "category" : "Micros",
        "image" : "",
        "_id" : "00003",
    },
    {   "title" : "Manganese Sulfate",
        "price" : 124.99,
        "category" : "Micros",
        "image" : "",
        "_id" : "00004",
    },
    {   "title" : "Epsom Salt",
        "price" : 124.99,
        "category" : "Micros",
        "image" : "",
        "_id" : "00005",
    },
    {   "title" : "Copper Sulfate",
        "price" : 124.99,
        "category" : "Micros",
        "image" : "",
        "_id" : "00006",
    },
    {   "title" : "Boron 15",
        "price" : 124.99,
        "category" : "Micros",
        "image" : "",
        "_id" : "00007",
    }

]

const mockCategories = ["Phosphates", "Micros", "Specialty Chems"]

function Catalog(){
    return(


    <div className="catalog">
        <h1> Our Products </h1>
        <div className="filters">
            {mockCategories.map(cat => <button> {cat} </button>)}
        </div>
            
        <div className="list"> 
            {mockData.map ( item => <Product key={item._id} data={item}></Product>)}
        </div>
    </div>

    );
}

export default Catalog;

/** Map every categories from the mockCategory Array into buttons */

