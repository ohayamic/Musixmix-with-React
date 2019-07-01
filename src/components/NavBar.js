import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  const navUl = {
    marginRight: 100
  };
  return (
    <nav style={{ marginBottom: "15px" }}>
      <div className="nav-wrapper bg-dark">
        <Link
          to="/"
          className=" left brand-logo"
          style={{
            fontSize: "30px",
            textDecoration: "none",
            marginLeft: "100px",
            position: "relative"
          }}
        >
          OhayaMic
        </Link>
        <ul id="nav-mobile" className="right hide-on-sm-and-down" style={navUl}>
          <li>
            <Link to="/" style={{ fontSize: "20px", textDecoration: "none" }}>
              Sign Up
            </Link>
          </li>
          <li>
            <Link to="/" style={{ fontSize: "20px", textDecoration: "none" }}>
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;
