import React, { useState } from "react";
import logo from "../../../assets/icons/littlelemon_logo.png";
import "../css/_Nav.scss";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Nav = () => {
  const [navMenu, setNavMenu] = useState(false);
  const appearNavMenu = () => {
    setNavMenu(!navMenu);
  };

  return (
    <nav className="nav">
      <img src={logo} alt="logo" className="logo"></img>
      {navMenu ? (
        // <menu className="ulMenu">
          <ul className="ulMenu">
          <li>
            <Link to={"./"}>home</Link>
            <Link to={"./"}>Linkbout</Link>
            <Link to={"./"}>menu</Link>
            <Link to={"./"}>reservLinktions</Link>
            <Link to={"./"}>order online</Link>
            <Link to={"./"}>login</Link>
          </li>
        </ul>
        // </menu>
      ) : (
        ""
      )}
      <ul className="ulBar">
        <li>
          <a href={"./"}>home</a>
          <a href={"./"}>about</a>
          <a href={"./"}>menu</a>
          <a href={"./"}>reservations</a>
          <a href={"./"}>order online</a>
          <a href={"./"}>login</a>
        </li>
      </ul>
      {/* <button onClick={appearNavMenu} className="menuIcon"> */}
        <AiOutlineMenu  className="menuIcon icon" onClick={appearNavMenu}/>
      {/* </button> */}
    </nav>
  );
};

export default Nav;
