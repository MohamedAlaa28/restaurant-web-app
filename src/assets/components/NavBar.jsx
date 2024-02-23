import React, { useState } from "react";
import logo from "../icons/Logo.svg";
import "../css/_NavBar.scss";
import { AiOutlineMenu } from "react-icons/ai";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
import { useSelector } from "react-redux";
import { cartToggle } from "../../state/cart/cartSlice";
import { useDispatch } from "react-redux";

const NavBar = () => {
  const dispatch = useDispatch();
  const sideBarMeals = useSelector((state) => (state.cart.meals))
  // const count = useSelector((state) => (state.cart.count));
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
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setNavMenu(!navMenu)}
              aria-label="On Click"
            >
              home
            </NavLink>
          </li>
          <li>
            <Link
              onClick={() => {
                scrollToSection("about");
                setNavMenu(!navMenu);
              }}
              aria-label="On Click"
            >
              about
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                scrollToSection("main");
                setNavMenu(!navMenu);
              }}
              aria-label="On Click"
            >
              menu
            </Link>
          </li>
          <li>
            <NavLink
              to={"/booking"}
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setNavMenu(!navMenu)}
              aria-label="On Click"
            >
              Reservations
            </NavLink>
          </li>
          <li>
            <Link
              // to={"/"}
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setNavMenu(!navMenu)}
              aria-label="On Click"
            >
              order online
            </Link>
          </li>
          <li>
            <NavLink
              to={"/profile"}
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setNavMenu(!navMenu)}
              aria-label="On Click"
            >
              <FaRegUser />
            </NavLink>
          </li>
          <li>
            {sideBarMeals.length > 0
              &&
              <p className="count">{sideBarMeals.length}</p>
            }
            <Link
              onClick={() => dispatch(cartToggle(true))}
              aria-label="On Click">
              <MdOutlineShoppingCart className="" />
            </Link>
          </li>
        </ul>
      ) : null}

      <ul className="ul-bar">
        <li>
          <NavLink
            to={"/"}
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setNavMenu(!navMenu)}
            aria-label="On Click"
          >
            home
          </NavLink>
        </li>
        <li>
          <Link
            onClick={() => {
              scrollToSection("about");
              setNavMenu(!navMenu);
            }}
            aria-label="On Click"
          >
            about
          </Link>
        </li>
        <li>
          <Link
            onClick={() => {
              scrollToSection("main");
              setNavMenu(!navMenu);
            }}
            aria-label="On Click"
          >
            menu
          </Link>
        </li>
        <li>
          <NavLink
            to={"/booking"}
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setNavMenu(!navMenu)}
            aria-label="On Click"
          >
            Reservations
          </NavLink>
        </li>
        <li>
          <Link
            // to={"/"}
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setNavMenu(!navMenu)}
            aria-label="On Click"
          >
            order online
          </Link>
        </li>
        <li>
          <NavLink
            to={"/profile"}
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setNavMenu(!navMenu)}
            aria-label="On Click"
          >
            <FaRegUser />
          </NavLink>
        </li>
        <li>
          {sideBarMeals.length > 0
            &&
            <p className="count">{sideBarMeals.length}</p>
          }
          <Link
            onClick={() => dispatch(cartToggle(true))}
            aria-label="On Click">
            <MdOutlineShoppingCart className="" />
          </Link>
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
