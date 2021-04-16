import React from "react";
import "../../assets/Layout.css";
import Footer from "./Footer";
import Nav from "./Nav";

const Layout = (props) => (
  <div className="layout">
    <Nav />
    <div className="layout-children">{props.children}</div>

    <Footer />
  </div>
);

export default Layout;
