import React from "react";
import LOGO from "../assets/Nike decide deixar de vender seus produtos na Amazon.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header>
        <a href="#">
          <img src={LOGO} className="logo" alt="logo-here" />
        </a>
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
            <a href="#">Newsletter</a>
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
