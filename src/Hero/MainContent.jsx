import React from "react";
import "./MainContent.css"
import Introduce from "./Introduce";
import Creations from "./Creations";

function MainContent() {
    return (
    <main className="MainContent--container">
        <Introduce />
        <Creations />
    </main>
    )
}

export default MainContent;