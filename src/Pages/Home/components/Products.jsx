import React from "react";
import ProductCard from "../../../assets/components/ProductCard";
import SliderSection from "../../../assets/components/SliderSection";
import { Link } from "react-router-dom";
import Button from "../../../assets/components/Button";
import "../css/_Products.scss";

const Products = () => {
  return (
    <main className="main">
      <section className="title-section">
        <p className="h1">this week's specials!</p>
        <div>
          <Link to={"./menu"}>
            <Button text={"online menu"} />
          </Link>
        </div>
      </section>
      <SliderSection type="product" Card={ProductCard} />
    </main>
  );
};

export default Products;
