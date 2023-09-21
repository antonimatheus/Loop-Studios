import React from "react";
import "../Hero/Introduce.css"

import interactive from "../assets/images/desktop/image-interactive.jpg"

function Introduce() {
    return (
        <main className="Introduce--container">
            <div className="Introduce--img">
                <div className="Introduce--img1">
                    <img src={interactive} alt="interactive--img" />
                </div>
                <div className="Introduce--img2">
                    <img src={interactive} alt="interactive--img" />
                </div>
            </div>

            <div className="Introduce--box1">
                <div className="Introduce--title">
                    <h1>The leader in interactive VR</h1>
                </div>
                <div className="Introduce--text">
                    <p>Founded in 2011, Loopstudios has been producing world-class virtual reality
                    projects for some of the best companies around the globe. Our award-winning
                    creations have transformed businesses through digital experiences that bind
                    to their brand.</p>
                </div>
            </div>
            <div className="Introduce--box2">
                <div className="Introduce--title">
                    <h1>The leader in interactive VR</h1>
                </div>
                <div className="Introduce--text">
                    <p>Founded in 2011, Loopstudios has been producing world-class virtual reality
                    projects for some of the best companies around the globe. Our award-winning
                    creations have transformed businesses through digital experiences that bind
                    to their brand.</p>
                </div>
            </div>
        </main>
    )
}

export default Introduce;