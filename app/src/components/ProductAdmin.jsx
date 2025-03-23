import "./ProductAdmin.css"

function ProductAdmin(){

    function save(){
        console.log("saving product");
    }

    return(
        <div className="prod-admin">
            <h3> New Product </h3>
            <div className="form-field">
                <label className="form-label"> Title </label>
                <input className="form-control" type="text"></input>
            </div>
            <div className="form-field">
                <label className="form-label"> Price: </label>
                <input className="form-control" type="text"></input>
            </div>
            <div className="form-field">
                <label className="form-label"> Image Url </label>
                <input className="form-control" type="text"></input>
            </div>
            <div className="form-field">
                <label className="form-label"> Category </label>
                <input className="form-control" type="text"></input>
            </div>
            <button className="btn btn-sm btn-primary" onClick={save}> Save </button>
        </div>

    )


}

export default ProductAdmin;
