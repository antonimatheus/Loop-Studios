import React from "react";
import "./Creations.css"
import data from "./Data";
import data2 from "./DataTwo";

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
                <div
                className="Creations--imgs" key={index}
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${item.img})`
                }}>
                    <h2>{item.title}</h2>
                </div>
            ))}
            {data2.map((item, index) => (
                <div
                className="Creations--imgs2" key={index}
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${item.img})`
                }}>
                    <h2>{item.title}</h2>
                </div>
            ))}

                <div className="Creations--seeAll2">
                    <input type="button" value="See All" />
                </div>
            </div>
            
        </main>
    )
}

export default Creations;