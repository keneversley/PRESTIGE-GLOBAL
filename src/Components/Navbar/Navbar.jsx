import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../Assets/prestigelogo.JPG";

export const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Logo" />
        <p>PRESTIGE GLOBAL</p>
      </div>
      <div className="nav-toggle" onClick={toggleMenu}>
        <span className="hamburger"></span>
        <span className="hamburger"></span>
        <span className="hamburger"></span>
      </div>
      <ul className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
        <li onClick={() => { setMenu("home"); closeMenu(); }}>
          <Link to="/">Home</Link>
          {menu === "home" && <hr />}
        </li>
        <li onClick={() => { setMenu("nightlife"); closeMenu(); }}>
          <Link to="/nightlifes">Nightlife|Pool Party</Link>
          {menu === "nightlife" && <hr />}
        </li>
        <li onClick={() => { setMenu("restaurants"); closeMenu(); }}>
          <Link to="/restaurant">Restaurants</Link>
          {menu === "restaurants" && <hr />}
        </li>
        <li onClick={() => { setMenu("mansion"); closeMenu(); }}>
          <Link to="/mansions">Mansion|Villas|PentHouse</Link>
          {menu === "mansion" && <hr />}
        </li>
        <li onClick={() => { setMenu("exoticcars"); closeMenu(); }}>
          <Link to="/exotics">Exotic Cars</Link>
          {menu === "exoticcars" && <hr />}
        </li>
        <li onClick={() => { setMenu("yachts"); closeMenu(); }}>
          <Link to="/yacht">Yachts</Link>
          {menu === "yachts" && <hr />}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

