import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="nav-div">
      <div className="logo">
        <h1>Planner</h1>
      </div>

      <div className="nav-titles">
        <NavLink to="/">
          <div className="navlinks">Home</div>
        </NavLink>
        <NavLink to="/about">
          <div className="navlinks">About Us</div>
        </NavLink>
        <NavLink to="/">
          <div className="navlinks">Resources</div>
        </NavLink>

        <NavLink to="/">
          <div className="navlinks"> Contact</div>
        </NavLink>
        {/* <NavLink to="/todo">
          {" "}
          <li>Todo</li>
        </NavLink> */}

        <button> Login</button>
      </div>
    </div>
  );
};

export default Navbar;
