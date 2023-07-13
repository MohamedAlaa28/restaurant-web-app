import React, { useState } from "react";
import logo from "../icons/Logo.svg";
import "../css/_NavBar.scss";
import { AiOutlineMenu } from "react-icons/ai";
// import { FaUser } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";

const NavBar = () => {
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
        <img src={logo} alt="nav-logo" className="nav-logo" />
      </Link>
      <SearchBar className="Search-bar" />
      {navMenu ? (
        <ul className="ul-menu">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) => isActive && "active"}
            >
              home
            </NavLink>
            <Link
              onClick={() => scrollToSection("about")}
              aria-label="On Click"
            >
              about
            </Link>
            <NavLink
              to={"/menu"}
              className={({ isActive }) => isActive && "active"}
            >
              menu
            </NavLink>
            <NavLink
              to={"/booking"}
              className={({ isActive }) => isActive && "active"}
            >
              Reservations
            </NavLink>
            <NavLink
              to={"/orders"}
              className={({ isActive }) => isActive && "active"}
            >
              order online
            </NavLink>
            <NavLink
              to={"/profile"}
              className={({ isActive }) => isActive && "active"}
            >
              {/* <FaUser /> */}
              login
            </NavLink>
          </li>
        </ul>
      ) : null}

      <ul className="ul-bar">
        <li>
          <NavLink
            to={"/"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            home
          </NavLink>
          <Link onClick={() => scrollToSection("about")} aria-label="On Click">
            about
          </Link>
          <NavLink
            to={"/menu"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            menu
          </NavLink>
          <NavLink
            to={"/booking"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Reservations
          </NavLink>
          <NavLink
            to={"/orders"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            order online
          </NavLink>
          <NavLink
            to={"/profile"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {/* <FaUser /> */}
            login
          </NavLink>
        </li>
      </ul>

      <AiOutlineMenu
        className={`menu-icon ${navMenu ? "open" : ""}`}
        onClick={appearNavMenu}
      />
    </nav>
  );
};

export default NavBar;
