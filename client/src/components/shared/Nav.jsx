import React from "react";
import "../../assets/Nav.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <div className="nav">
        <img src="https://res.cloudinary.com/dygk00sc0/image/upload/v1618102635/Charcoal_Bordered_Photography_Logo_avwo5y.png" alt="logo" className="company-logo"/>
        <NavLink className="logo" to="/">
          H. Chandler Manly
        </NavLink>
          <NavLink className="nav-link" to="/projects">
            Products
          </NavLink>
          <NavLink className="nav-link" to="/contact">
            Connect
          </NavLink>
        </div>
    </nav>
  );
};

export default Nav;
