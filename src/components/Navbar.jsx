import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header>
        <a className="logo">SHOSHY</a>

        <ul>
          <li>
            <Link to="/Home" className="nav-links">
              Home
            </Link>
          </li>
          <li>
            <Link to="/Products" className="nav-links">
              Products
            </Link>
          </li>

          <li>
            <a href="#" className="nav-links">
              Newsletter
            </a>
          </li>
          <li>
            <Link to="/Contact" className="nav-links">
              Contacts
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Navbar;
