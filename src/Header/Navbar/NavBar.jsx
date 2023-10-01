import React from "react";
import "../Navbar/NavBar.css"
import Burger from "./Burger";
import logo from "../../assets/images/logo.svg"

function NavBar() {

    return (
        <div className="Navbar--container">
            <div className="Navbar--logo">
                <img src={logo} alt="logo"/>
            </div>
            <div className="Navbar--li">
                <ul>
                    <li>About</li>
                    <li>Careers</li>
                    <li>Events</li>
                    <li>Products</li>
                    <li>Support</li>
                </ul>
            </div>
            
            <Burger />
        </div>
    )
}

export default NavBar;