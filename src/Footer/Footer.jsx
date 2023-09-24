import React from "react";
import "./Footer.css"
import logo from "../assets/images/logo.svg"
import facebook from "../assets/images/icon-facebook.svg"
import instagram from "../assets/images/icon-instagram.svg"
import pinterest from "../assets/images/icon-pinterest.svg"
import twitter from "../assets/images/icon-twitter.svg"

function Footer() {
    return (
        <div className="Footer--container">
            <div className="Footer--nav">
                <div className="Footer--logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="Footer--li">
                    <ul>
                        <li>About</li>
                        <li>Careers</li>
                        <li>Events</li>
                        <li>Products</li>
                        <li>Support</li>
                    </ul>
                </div>
            </div>
            <div className="Footer--media">
                <div className="Footer--mediaBlock">
                    <div className="Footer--social">
                        <ul>
                            <li><img src={facebook} alt="icon_facebook" /></li>
                            <li><img src={twitter} alt="icon_twitter" /></li>
                            <li><img src={pinterest} alt="icon_pinterest" /></li>
                            <li><img src={instagram} alt="icon_instagram" /></li>
                    
                        </ul>
                    </div>
                    <div className="Footer--rights">
                        <p>© 2023 Loopstudios. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;


