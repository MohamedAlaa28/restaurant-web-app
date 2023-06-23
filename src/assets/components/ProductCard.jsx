import React from "react";
import { MdDeliveryDining } from "react-icons/md";
import "../css/_ProductCard.scss";

const ProductCard = ({ image, name, price, description }) => {
  return (
    <div className="productCard">
      <header>
        <img src={image} alt="mainLogo" className="mainLogo"></img>
      </header>
      <article>
        <div>
          <p>{name}</p>
          <p className="price">{price}</p>
        </div>
        <p className="cardDescription">{description}</p>
        <button>
          order a delivery <MdDeliveryDining className="icon" />
        </button>
      </article>
    </div>
  );
};

export default ProductCard;
