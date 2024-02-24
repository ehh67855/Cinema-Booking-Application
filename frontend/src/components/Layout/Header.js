import React from "react";
import './Layout.css'
import { Link } from "react-router-dom";
import './Header.css';

function Header() {
    return (
        <header>
            <Link to={`/`}>Cinema E-Booking System</Link>
        </header>
    );
}

export default Header;