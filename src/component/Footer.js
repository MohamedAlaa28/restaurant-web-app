import React from "react";
import logo from "../icons_assets/Logo.svg";

const Footer = () => {
  return (
    <React.Fragment>
      <img src={logo} alt="logo"></img>
      <ul>
        <li>
          <p>Doormat</p>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Menu</a>
          <a href="/">Reservations</a>
          <a href="/">Order Online</a>
          <a href="/">Login</a>
        </li>
      </ul>
      <ul>
        <li>
          <p>Contact</p>
          <a href="/">address</a>
          <a href="/">Phone number</a>
          <a href="/">Email</a>
        </li>
      </ul>
      <ul>
        <li>
          <p>Social Media Links</p>
          <a href="/">address</a>
          <a href="/">Phone number</a>
          <a href="/">Email</a>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default Footer;
