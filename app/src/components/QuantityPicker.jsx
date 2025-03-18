import { useState } from "react";
import "./QuantityPicker.css";

function QuantityPicker(){
    const [quantity, setQuantity] = useState(1); 
    /*the 1 sets the initial value */ 
    function increase(){
        console.log("hello up")
        let val = quantity + 1;
        setQuantity(val);
    }

    function decrease(){
        console.log("going down")
        let val = quantity - 1;
        if (val > 0){
            setQuantity(val);
        }
        
    }



    return(
        <div className="qt-picker">
            <button className="btn btn-sm btn-outline-danger" onClick={decrease}> - </button>
            <label> {quantity} </label>
            <button className="btn btn-sm btn-outline-success" onClick={increase}> + </button>

        </div>
    )
}

export default QuantityPicker;
