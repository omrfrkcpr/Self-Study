import React from "react";
import "./Navbar.scss";
import logo from "../../helper/logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar--logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="navbar--links">
        <a href="#horoscope">Horoscope</a>
        <a href="#daily">Daily</a>
        <a href="#tarot">Tarot</a>
        <a href="#article">Article</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
};

export default Navbar;
