import React from "react"
import { Link } from "react-router-dom";
import "./Nav.scss"
import logo from "../../assets/logo192.png"

const Nav = () => (
    <div className="nav-container">
        <div className="logo-container">
            <Link to="/">
                <img alt="logo" src={logo} className="nav-logo"/>
            </Link>
            <div>Tesis</div>
        </div>
        <div className="buttons">
            <Link to="data">
                <button>Data</button>
            </Link>
            <Link to="gps">
                <button>GPS</button>
            </Link>
        </div>
    </div>
);

export default Nav;