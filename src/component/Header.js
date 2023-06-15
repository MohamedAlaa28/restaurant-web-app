import React from "react";
import headerLogo from "../assets/icons/restauranfood.jpg";
import "../assets/css/_Header.scss";

const Header = () => {
  return (
    <header className="header">
      <section>
        <p className="h1">little lemon</p>
        <p className="h3">chicago</p>
        <p className="p">
          We re family owned Mediterranean restaurant focused on traditional
          recipes served with a modern twist.
        </p>
        <button>reserve table</button>
      </section>
      <img src={headerLogo} alt="headerLogo" className="headerLogo"></img>
    </header>
  );
};

export default Header;
