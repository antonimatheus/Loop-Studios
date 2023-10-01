import React, { useState } from 'react';
import burgerImg from "../../assets/images/icon-hamburger.svg"
import closeImg from "../../assets/images/icon-close.svg"

function Burger() {
const [burger, setBurger] = useState(false);
const showLi = () => {
setBurger(!burger)
}

return (
<div className="Navbar--liBurger">
    <div className='Navbar--iconBurger'>
        <img src={burger ? closeImg : burgerImg} alt="icon-burger" onClick={showLi}/>
    </div>
    {burger && (
        <div className="Navbar--ulBurger">
        {burger && (
            <div>
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
    )}
</div>
)
}

export default Burger;