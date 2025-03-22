import "./Discounts.css"

function Discount(){

function save(){
    console.log("saving discount");
}

    return(
        <div className="discounts">
            <h3> Discount Code </h3>
            <div className="form-field">
                <label className="form-label"> Code </label>
                <input className="form-control" type="text"></input>
            </div>
            <div className="form-field">
                <label className="form-label"> Discount: </label>
                <input className="form-control" type="text"></input>
            </div>
            <button className="btn btn-sm btn-primary" onClick={save}> Save </button>
        </div>

    )


}

export default Discount;
