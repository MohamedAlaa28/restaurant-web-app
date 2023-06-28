import React from "react";
import greekSalad from "../../../assets/images/greek salad-min.jpg";
import bruchetta from "../../../assets/images/bruchetta.jpg";
import lemonDessert from "../../../assets/images/lemon dessert.jpg";
import "../css/_Products.scss";
import ProductCard from "../../../assets/components/ProductCard";
import { Link } from "react-router-dom";
import Button from "../../../assets/components/Button";

const cards = [
  {
    id: 1,
    name: "greek salad",
    price: "$12.99",
    description:
      "the famous greek salad of crispy lettuce, peppers, olives and our chicago style feta cheese , garnished with crunchy garlic and rosemary croutons",
    Image: greekSalad,
  },
  {
    id: 2,
    name: "bruchetta",
    price: "$5.99",
    description:
      "our bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil",
    Image: bruchetta,
  },
  {
    id: 3,
    name: "lemon dessert",
    price: "$5.00",
    description:
      "this comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined",
    Image: lemonDessert,
  },
];

const Products = () => {
  return (
    <div className="main">
      <section className="titleSection">
        <p className="h1">this weeks specials !</p>
        <div>
          <Link to={"./menu"}>
            <Button text={"online menu"} />
          </Link>
        </div>
      </section>
      {/* <section className="buttonsSection">
        <p></p>
        <div>
          <Button text={"deserts"} />
          <Button text={"meals"} />
          <Button text={"drinks"} />
        </div>
        <p></p>
      </section> */}
      <section className="cardsSection">
        {cards.map((card) => (
          <ProductCard
            key={card.id}
            image={card.Image}
            name={card.name}
            price={card.price}
            description={card.description}
          />
        ))}
      </section>
    </div>
  );
};

export default Products;
