import React from 'react';
import '../Header/Nav.css'; // Include styles for Nav

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="vendor-logo.png" alt="Vendor Logo" className="logo-img" />
        <h2 className="shop-name">Shop Name</h2>
      </div>
    </nav>
  );
};

export default Nav;
