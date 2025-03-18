import "./Product.css";
import QuantityPicker from "./QuantityPicker";

function Product(){

    function addProduct(){
        console.log("Added to Shopping Cart")
    }

    return (
        <div className="product">
            <h5> Title Here </h5>

            <QuantityPicker></QuantityPicker>
            <button className="btn" onClick={addProduct}><i class="fa-solid fa-cart-plus"></i> Add To Cart </button> 
        </div>
    );
}

export default Product;
