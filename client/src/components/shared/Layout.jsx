import React from "react";
import "../../assets/Layout.css";
import Nav from "./Nav";
import Footer from "./Footer";

const Layout = (props) => (
  <div className="layout">
    <Nav />
    <div className="layout-children">{props.children}</div>
    <Footer />
  </div>
);

export default Layout;
