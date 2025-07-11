// src/components/Sidebar.js
import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h1 className="logo">SmartFormify</h1>
      <nav>
        <ul>
          <li><Link to="/">🏠 Dashboard</Link></li>
          <li><Link to="/forms">🧾 Forms</Link></li>
          <li><Link to="/employees">👥 Employees</Link></li>
          <li><Link to="/marketing">📢 Marketing</Link></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
