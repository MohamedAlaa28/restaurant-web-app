import React from "react";
import { MdDeliveryDining } from "react-icons/md";
import "../css/_ProductCard.scss";
import LazyLoad from "react-lazyload";

const ProductCard = ({ image, name, price, description }) => {
  const getRandomPrice = () => {
    const min = 5;
    const max = 100;
    const randomPrice = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomPrice;
  };

  return (
    <div className="product-card">
      <header>
        <LazyLoad>
          <img src={image} alt="mainLogo"></img>
        </LazyLoad>
      </header>
      <article>
        <div>
          <p>{name}</p>
          <p className="price">{getRandomPrice()} £</p>
        </div>
        <p className="card-description">{description}</p>
        <button aria-label="On Click">
          Order a Delivery &nbsp;
          <MdDeliveryDining className="icon" />
        </button>
      </article>
    </div>
  );
};

export default ProductCard;
