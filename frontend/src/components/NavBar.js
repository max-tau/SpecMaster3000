import React from "react";
import { Link } from "react-router-dom";
import "../style/NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <Link to="/log-in" className="navbar-links">
        Log In
      </Link>
      <Link to="create-account" className="navbar-links">
        Create Account
      </Link>
    </div>
  );
};

export default NavBar;
