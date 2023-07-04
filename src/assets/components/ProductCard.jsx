import React from "react";
import { MdDeliveryDining } from "react-icons/md";
import "../css/_ProductCard.scss";
import LazyLoad from "react-lazyload";

const ProductCard = ({ image, name, price, description }) => {
  return (
    <div className="productCard">
      <header>
        <LazyLoad>
          <img src={image} alt="mainLogo" className="mainLogo"></img>
        </LazyLoad>
      </header>
      <article>
        <div>
          <p>{name}</p>
          <p className="price">{price}</p>
        </div>
        <p className="cardDescription">{description}</p>
        <button aria-label="On Click">
          order a delivery <MdDeliveryDining className="icon" />
        </button>
      </article>
    </div>
  );
};

export default ProductCard;
