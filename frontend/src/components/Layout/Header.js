import React from "react";
import './Layout.css'
import { Link } from "react-router-dom";

import './Header.css';

function Header() {
    const userStatus = "unregistered";

    const renderOptions = () => {
        switch (userStatus) {
        case 'unregistered':
            return <div>
                <a id = "login" href = "/login" >Login</a>
                <a id = "signup" href = "/register" >Signup</a>
            </div>;
        case 'registered':
            return <div>
                <a id = "logout" href="/logout">Logout</a>
                <a id = "edit-profile" href="/edit-profile">Edit Profile</a>
            </div>;
        case 'admin':
            return <div>
                <a id = "logout" href="/logout">Logout</a>
                <a id = "edit-profile" href="/edit-profile">Edit Profile</a>
            </div>;
        }
    };

    return (
        <header>
            <Link to={`/`}>Cinema E-Booking System</Link>
            {renderOptions()}
        </header>
    );
}

export default Header;