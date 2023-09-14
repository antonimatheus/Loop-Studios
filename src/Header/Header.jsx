import React from "react";
import "../Header/Header.css"

import NavBar from "./Navbar/NavBar";

function Header() {
    return (
        <div className="Header--container">
            <NavBar />
            <div className="Header--box">
                <div className="Header--title">
                    <h1>Immersive experiences that deliver</h1>
                </div>
                <div className="Header--noBlock">
                
                </div>
            </div>
        </div>
    )
}

export default Header;