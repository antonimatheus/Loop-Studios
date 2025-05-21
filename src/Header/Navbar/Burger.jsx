import React, { useState, useEffect } from "react";
import burgerImg from "../../assets/images/icon-hamburger.svg";
import closeImg from "../../assets/images/icon-close.svg";

function Burger() {
    const [burger, setBurger] = useState(false);

    const toggleBurger = () => {
        setBurger(!burger);
    };

    // Travar o scroll quando o menu abre
    useEffect(() => {
        if (burger) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [burger]);

    return (
        <div className="Navbar--liBurger">
            {/* Overlay escuro */}
            {burger && <div className="Navbar--overlay" onClick={toggleBurger}></div>}

            {/* Ícone do menu (hamburger ou X) */}
            <div className="Navbar--iconBurger">
                <img 
                    src={burger ? closeImg : burgerImg} 
                    alt="icon-burger" 
                    onClick={toggleBurger} 
                />
            </div>

            {/* Menu lateral */}
            {burger && (
                <div className="Navbar--ulBurger">
                    <ul>
                        <li>About</li>
                        <li>Careers</li>
                        <li>Events</li>
                        <li>Products</li>
                        <li>Support</li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Burger;
