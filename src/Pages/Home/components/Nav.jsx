import React, { useState } from "react";
import logo from "../../../assets/icons/Logo.svg";
import "../css/_Nav.scss";
import { AiOutlineMenu } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import SearchBar from "../../../assets/components/SearchBar";

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
        <img src={logo} alt="logo" className="logo" />
      </Link>
      <SearchBar className="SearchBar" />
      {navMenu ? (
        <ul className="ulMenu">
          <li>
          <Link to={"/"}>menu</Link>
          <Link to={"/booking"}>Reserve Now</Link>
          <Link to={"/"}>order online</Link>
          <Link onClick={() => scrollToSection("about")} aria-label="On Click"> about</Link>
          <Link to={"/"}>
            <FaUser />
          </Link>
          </li>
        </ul>
      ) : null}

      <ul className="ulBar">
        <li>
          <Link to={"/"}>menu</Link>
          <Link to={"/booking"}>Reserve Now</Link>
          <Link to={"/"}>order online</Link>
          <Link onClick={() => scrollToSection("about")} aria-label="On Click"> about</Link>
          <Link to={"/"}>
            <FaUser />
          </Link>
        </li>
      </ul>

      <AiOutlineMenu
        className={`menuIcon ${navMenu ? "open" : ""}`}
        onClick={appearNavMenu}
      />
    </nav>
  );
};

export default Nav;
