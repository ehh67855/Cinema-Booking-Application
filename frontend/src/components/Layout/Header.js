import React from "react";
import './Layout.css'
import { Link } from "react-router-dom";
import './Header.css';

function Header() {
    return (
        <header>
            <Link to={`/`}>Cinema E-Booking System</Link>
            <a id = "login" href = "/login" >Login</a>
            <a id = "signup" href = "/register" >Signup</a>
        </header>
    );
}

export default Header;