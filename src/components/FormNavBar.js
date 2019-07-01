import React from "react";
import { Link } from "react-router-dom";

export default function FormNavBar(props) {
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
      </div>
    </nav>
  );
}
