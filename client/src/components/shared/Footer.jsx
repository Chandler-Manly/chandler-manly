import React from "react";
import "../../assets/Footer.css";
import {Link} from "react-router-dom";


const Footer = () => (
  <footer>
    <div className="footer">
      <div className="footer-items">
        <div className="icons">
            <Link to="/"><div className="fa fa-home">Return Home</div></Link>
          <div className="linkedin">
            <a
              href="https://www.linkedin.com/in/chandler-manly/"
              className="fa fa-linkedin"
            >
              Linkedin
            </a>
          </div>
          <div className="github">
            <a
              href="https://github.com/Chandler-Manly"
              className="fa fa-github"
            >
              GitHub
            </a>
          </div>

        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
