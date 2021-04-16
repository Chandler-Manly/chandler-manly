import React from 'react'
import '../../assets/Nav.css'
import {NavLink} from 'react-router-dom';

const Nav = () => {

    return (
        <nav>
        <div className="nav">
          <div className="logo">
                <NavLink to='/'>H. Chandler Manly</NavLink>
                </div>   
          <div className="links">
                    {/* <a href="/" className="fa fa-home"></a> */}
                    <a href="/portfolio">Portfolio</a>
                    <a href="/connect">Connect</a>
                </div>
            </div>
        </nav>
    )

}

export default Nav