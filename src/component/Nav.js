import React from "react";
import logo from "../icons_assets/Logo.svg";
const Nav = () => {
  return (
    <React.Fragment>
      <img src={logo} alt="logo"></img>
      <ul>
        <li>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Menu</a>
          <a href="/">Reservations</a>
          <a href="/">Order Online</a>
          <a href="/">Login</a>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default Nav;
