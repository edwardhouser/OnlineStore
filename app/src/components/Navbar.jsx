import "./Navbar.css";

import { Link } from "react-router-dom";

function Navbar(){
    return (
        <div className="navbar">
            <span className="title"> Organika </span>
            <ul>
                <li><Link to='/Home'> Home </Link> </li>
                <li><Link to='/Catalog'> Catalog </Link></li>
                <li><Link to='/Admin'> About </Link> </li>
                <li><Link to='/Cart'> Cart </Link> </li>
            </ul>
        </div>
    );
}

export default Navbar;
