import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="header">
    <div className="container nav">
      <div className="logo">QAElevate</div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  </header>
);

export default Header;
