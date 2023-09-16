import React from "react";
import "./Creations.css"
import data from "./Imgs";

function Creations() {
    return (
        <main className="Creations--container">
            <div className="Creations--box">
                <div className="Creations--title">
                    <h1>Our Creations</h1>
                </div>
                <div className="Creations--seeAll">
                    <input type="button" value="See All" />
                </div>
            </div>
            <div className="Creations--images">
                {data.map((item, index) => (
                <div className="Creations--imgs" key={index} style={{ backgroundImage: `URL(${item.img})`}}>
                    <h2>{item.title}</h2>
                </div>
                ))}
            </div>
        </main>
    )
}

export default Creations;