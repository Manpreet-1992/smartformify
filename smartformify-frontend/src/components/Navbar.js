import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-logo">SmartFormify</div>
      <ul className="navbar-links">
        {["dashboard", "forms", "employees", "marketing"].map((page) => (
          <li key={page}>
            <Link
              to={`/${page}`}
              className={`nav-link ${
                location.pathname === `/${page}` ? "active" : ""
              }`}
            >
              {page.charAt(0).toUpperCase() + page.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
