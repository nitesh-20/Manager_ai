import React from "react";
import "../Header/Nav.css";

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="logo">Your Logo</div>
      <ul className="nav-links">
        <li><a href="#menu">Menu</a></li>
        <li className="dropdown">
          <a href="#reports">Reports</a>
          <div className="dropdown-content">
            <a href="#product-detail">Product-wise Detail</a>
            <a href="#monthly-detail">Overall Monthly Detail</a>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;