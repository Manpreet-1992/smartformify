// src/components/Navbar.js
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const location = useLocation();

  const pages = ["dashboard", "forms", "employees", "marketing"];

  return (
    <nav className="navbar">
      <div className="navbar-logo">SmartFormify</div>
      <ul className="navbar-links">
        {pages.map((page) => {
          const path = `/${page}`;
          const isActive = location.pathname === path || (page === "dashboard" && location.pathname === "/");
          return (
            <li key={page}>
              <Link
                to={path}
                className={`nav-link ${isActive ? "active" : ""}`}
              >
                {page.charAt(0).toUpperCase() + page.slice(1)}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
