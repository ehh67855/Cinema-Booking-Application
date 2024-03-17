import React from "react";
import './Layout.css'
import { Link } from "react-router-dom";

import './Header.css';

function Header() {
    const userStatus = localStorage.getItem("userStatus");

    const renderOptions = () => {
        switch (userStatus) {
        case 'unregistered':
            return <div className="profile-links">
                <a id = "login" href = "/login" >Login</a>
                <a id = "signup" href = "/register" >Signup</a>
            </div>;
        case 'registered':
            return <div className="profile-links">
                <a id = "logout" onClick={logout} href="/">Logout</a>
                <a id = "edit-profile" href="/edit-profile">Edit Profile</a>
            </div>;
        case 'admin':
            return <div className="profile-links">
                <a id = "logout" onClick={logout} href="/">Logout</a>
                <a id = "edit-profile" href="/edit-profile">Edit Profile</a>
            </div>;
        }
    };

    const logout = () => {
        localStorage.setItem("userStatus","unregistered");
        localStorage.removeItem("username");
    }

    return (
        <header>
            <Link to={`/`}>Cinema E-Booking System</Link>
            {renderOptions()}
        </header>
    );
}

export default Header;