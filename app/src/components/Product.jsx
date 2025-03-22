import "./Product.css";
import QuantityPicker from "./QuantityPicker";

function Product(props){
    const [quantity, setQuantity] = useState(1);

    function addProduct(){
        console.log("Added to Shopping Cart")
    }

    function handleQuantity(qty){
        console.log("Quantity Changed");
        setQuantity(qty);
    }

    return (
        <div className="product">
            <img src={props.data.image}></img>
            <div className="prices">
                <label className="unit">Total</label>
                <label className="unit">Unit Price</label>
            </div>

            <div className="prices">
                <label className="total"> {(props.data.price * quantity).toFixed(2)} </label>
                <label className="unit"> {props.data.price.toFixed(2)} </label>
            </div>

            <div className="controls">
            <QuantityPicker onChange={handleQuantity} />
            <button className="btn" onClick={addProduct}>
                <i class="fa-solid fa-cart-plus"></i> Add To Cart </button> 
            </div>

            <h6> Category: {props.data.category} </h6>

            
            
        </div>
    );
}

export default Product;
