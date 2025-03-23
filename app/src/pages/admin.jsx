import Discount from "../components/Discounts";
import ProductAdmin from "../components/ProductAdmin";
import "./admin.css";

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
