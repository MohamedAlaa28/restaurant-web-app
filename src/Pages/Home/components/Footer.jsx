import React from "react";
import footerLogo from "../../../assets/icons/small_logo.png";
import "../css/_Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <img src={footerLogo} alt="footerLogo" className="footerLogo"></img>
      <div>
      <ul>
        <li className="listOne">
          <p>document navigation</p>
          <Link to="/">home</Link>
          <Link to="/">about</Link>
          <Link to="/">menu</Link>
          <Link to="/">reservations</Link>
          <Link to="/">order online</Link>
          <Link to="/">login</Link>
        </li>
      </ul>
      <ul>
        <li className="lisTwo">
          <p>contact</p>
          <Link to="/">address</Link>
          <Link to="/">phone number</Link>
          <Link to="/">email</Link>
        </li>
      </ul>
      <ul>
        <li className="lisThree">
          <p>social media links</p>
          <Link to="/">address</Link>
          <Link to="/">phone number</Link>
          <Link to="/">email</Link>
        </li>
      </ul>
      </div>
    </footer>
  );
};

export default Footer;
