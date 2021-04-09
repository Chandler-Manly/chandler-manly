import React from 'react'
import '../../assets/Nav.css';
import { NavLink } from 'react-router-dom'

const Nav = () => {

    return (
        <nav>
            <div className="nav">
                <NavLink className="logo" to="/">H. Chandler Manly</NavLink>
                <div className="navigation-links">
            <NavLink className="link" to="/projects">Projects</NavLink>
            <NavLink className="link" to="/contact">Contact</NavLink>

                </div>
            </div>
        </nav>
    )

}

export default Nav