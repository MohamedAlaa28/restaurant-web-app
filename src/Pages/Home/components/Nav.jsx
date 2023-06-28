import React, { useState } from "react";
import logo from "../../../assets/images/littlelemon_logo.png";
import "../css/_Nav.scss";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Nav = () => {
  const [navMenu, setNavMenu] = useState(false);
  const appearNavMenu = () => {
    setNavMenu(!navMenu);
  };
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <nav className="nav">
      <Link to={"/"}>
        <img src={logo} alt="logo" className="logo"></img>
      </Link>
      {navMenu ? (
        <ul className="ulMenu">
          <li>
            <Link to={"/"}>home</Link>
            <Link onClick={() => scrollToSection("about")}>about</Link>
            <Link to={"./"}>menu</Link>
            <Link to={"/booking"}>reservations</Link>
            <Link to={"./"}>order online</Link>
            <Link to={"./"}>login</Link>
          </li>
        </ul>
      ) : (
        ""
      )}
      <ul className="ulBar">
        <li>
          <Link to={"/"}>home</Link>
          <Link onClick={() => scrollToSection("about")}>about</Link>
          <Link to={"./"}>menu</Link>
          <Link to={"/booking"}>reservations</Link>
          <Link to={"./"}>order online</Link>
          <Link to={"./"}>login</Link>
        </li>
      </ul>
      <AiOutlineMenu className="menuIcon icon" onClick={appearNavMenu} />
    </nav>
  );
};

export default Nav;
