import React, { useState } from "react";
import "../../assets/Nav.css";
import { NavLink } from "react-router-dom";
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "../globalStyles";
import { lightTheme, darkTheme } from "../Themes";
// Source: https://styled-components.com/docs


const Nav = () => {
  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
}
 
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
    <>
    <GlobalStyles/>

    <nav>
      <div className="nav">
        <img src="https://res.cloudinary.com/dygk00sc0/image/upload/v1618102635/Charcoal_Bordered_Photography_Logo_avwo5y.png" alt="logo" className="company-logo"/>
        <NavLink className="logo" to="/">
              H. Chandler Manly
        </NavLink>
            <div>
          <NavLink className="nav-link" to="/projects">
            Products
          </NavLink>
          <NavLink className="nav-link" to="/contact">
          Connect
          </NavLink>
          <button onClick={themeToggler}>Dark Mode</button>
          </div>
        </div>
    </nav>
    </>
      </ThemeProvider>
  )
}

export default Nav;
