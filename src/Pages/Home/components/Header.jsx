import React from "react";
import headerLogo from "../../../assets/icons/restauranfood.jpg";
import "../css/_Header.scss";
import { Link } from "react-router-dom";
import Button from "../../../assets/components/Button";

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
        <Link to={"./booking"}>
          <Button text={"reserve table"} />
        </Link>
      </section>
      <img src={headerLogo} alt="headerLogo" className="headerLogo"></img>
    </header>
  );
};

export default Header;
