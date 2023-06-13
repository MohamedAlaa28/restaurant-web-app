import React from "react";
import footerLogo from "../assets/icons/small_logo.png";
import '../assets/css/_Footer.scss'

const Footer = () => {
  return (
    <div className="footer">
      <img src={footerLogo} alt="footerLogo" className="footerLogo"></img>
      <ul>
        <li className="listOne">
          <p>document navigation</p>
          <a href="/">home</a>
          <a href="/">about</a>
          <a href="/">menu</a>
          <a href="/">reservations</a>
          <a href="/">order online</a>
          <a href="/">login</a>
        </li>
      </ul>
      <ul>
        <li className="lisTwo">
          <p>contact</p>
          <a href="/">address</a>
          <a href="/">phone number</a>
          <a href="/">email</a>
        </li>
      </ul>
      <ul>
        <li className="lisThree">
          <p>social media links</p>
          <a href="/">address</a>
          <a href="/">phone number</a>
          <a href="/">email</a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
