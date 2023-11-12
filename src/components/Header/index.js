import React from "react";
import './index.css';
import logo from "../../assets/logo.svg"

const Header = () => {
    return(
        <div className="header">
            <a href={"https://www.instagram.com/whatifflowers/"} target="_blank" rel="noreferrer">
                <img src={logo} alt="logo" className="header-logo"/>
            </a>
        </div>
    )
}

export default Header;
