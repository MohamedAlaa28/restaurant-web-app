import React from "react";
import logo from "../assets/icons/littlelemon_logo.png";
import '../assets/css/_Nav.scss'

const Nav = () => {
  return (
    <div className="nav">
      <img src={logo} alt="logo" className="logo"></img>
      <ul>
        <li>
          <a href="/">home</a>
          <a href="/">about</a>
          <a href="/">menu</a>
          <a href="/">reservations</a>
          <a href="/">order online</a>
          <a href="/">login</a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
