import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./nav.css";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <nav className="nav-div">
      <div className="logo">
        <h1>Planner</h1>
      </div>

      <div className="nav-titles">
        <NavLink to="/" className="navlinks">
          Home
        </NavLink>

        <NavLink to="/about" className="navlinks">
          About Us
        </NavLink>

        <NavLink to="/contact" className="navlinks">
          Contact
        </NavLink>

        <button className="nav-login-btn" onClick={handleLogin}>
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
