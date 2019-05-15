import React from "react";
const NavBar = () => {
  const navStyle = {
    marginLeft: 50,
    color: "white"
  };

  const navUl = {
    color: "white",
    marginRight: 50
  };
  return (
    <nav className="navbar navbar-light bg-dark mb-4">
      <a className="navbar-brand" href="/" style={navStyle}>
        Navbar
      </a>

      <ul className="nav justify-content-end">
        <li className="nav-item">
          <a className="nav-link active" href="/" style={{ color: "white" }}>
            Sign Up
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/login" style={navUl}>
            Login
          </a>
        </li>
        <li className="nav-item" />
      </ul>
    </nav>
  );
};
export default NavBar;
