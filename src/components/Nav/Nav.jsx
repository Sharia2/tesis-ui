import React from "react"
import { Link, useLocation } from "react-router-dom";
import "./Nav.scss"
import logo from "../../assets/logo192.png"

const Nav = () => { 
    const location = useLocation();
    const path = location.pathname;
    return(
        <div className="nav-container">
        <div className="logo-container">
            <Link to="/">
                <img alt="logo" src={logo} className="nav-logo"/>
            </Link>
            <Link to="/">
                <div className="logo-text">Moo World</div>
            </Link>
        </div>
        <div className="buttons">
            <Link to="data">
                <button className={path==="/data"? "active" : ''}>Datos</button>
            </Link>
            <Link to="gps">
                    <button className={path === "/gps" ? "active" : ''}>Mapa</button>
            </Link>
        </div>
    </div>
)
};

export default Nav;