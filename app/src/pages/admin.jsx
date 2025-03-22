import ProductAdmin from "../components/ProductAdmin";
import "./product.css";

function Admin(){


    return(
        <div className="admin">
            <h1> Store Administration</h1>
            <div className="parent">
                <section>
                    <Discount></Discount>
                </section>
                <section> <ProductAdmin></ProductAdmin>
                </section>

        </div>
        </div>
    )

}

export default Admin;
