import React from "react";
import './Navbar.css'

const Navbar = () => {
  return (
    <>
      <div className="nav">
        <div className="logo">
          <img src="./images/logo.png" alt="logo" />
        </div>
        <div className="navItems">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Location</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="button">
          <button>Login</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
