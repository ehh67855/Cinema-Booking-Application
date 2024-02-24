import React from "react";
import "./AdminMainPage.css";

const AdminMainPage = () => {
    return (
        <div className="buttons">
            <button className="adminMainPageBtn">Manage Movies</button>
            <button className="adminMainPageBtn">Manage Users</button>
            <button className="adminMainPageBtn">Manage Promotions</button>
        </div>
    );
}

export default AdminMainPage;