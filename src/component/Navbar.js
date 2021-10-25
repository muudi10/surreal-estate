import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/Navbar.css";
function Navbar() {
  return (
    <div className="navbar">
      <img src={logo} alt="Surreal Logo" />
      <ul className="navbar-links-item">
        <Link to="/">
          <li>View Properties</li>
        </Link>

        <Link to="/add-property">
          <li> Add a Property</li>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
