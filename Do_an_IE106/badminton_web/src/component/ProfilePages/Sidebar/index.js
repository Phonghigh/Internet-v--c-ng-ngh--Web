import React from "react";
import "./style.scss";

const Sidebar = ({ selectedTab, setSelectedTab }) => {
    const handleTabClick = (tab) => {
    setSelectedTab(tab);
    };

    return (
    <div className="sidebar">
        <ul>
        <li 
            className={selectedTab === "dashboard" ? "active" : ""}
            onClick={() => handleTabClick("dashboard")}
        >
            Dashboard
        </li>
        <li 
            className={selectedTab === "setting" ? "active" : ""}
            onClick={() => handleTabClick("setting")}
        >
            Setting
        </li>
        <li 
            className={selectedTab === "logout" ? "active" : ""}
            onClick={() => handleTabClick("logout")}
        >
            Logout
        </li>
        </ul>
    </div>
    );
};

export default Sidebar;
