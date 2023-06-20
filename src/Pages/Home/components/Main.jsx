import React from "react";
import greekSalad from "../../../assets/icons/greek salad.jpg";
import bruchetta from "../../../assets/icons/bruchetta.svg";
import lemonDessert from "../../../assets/icons/lemon dessert.jpg";
import { MdDeliveryDining } from "react-icons/md";
import "../../../assets/css/_Main.scss";

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

const Main = () => {
  return (
    <main className="main">
      <section className="titleSection">
        <p className="h1">this weeks specials ! </p>
        <div>
          <button>online menu</button>
        </div>
      </section>
      <section className="cardsSection">
        {cards.map((card) => (
          <section key={card.id} className="card">
            <img src={card.Image} alt="mainLogo" className="mainLogo"></img>
            <div>
              <p>{card.name}</p>
              <p className="price">{card.price}</p>
            </div>
            <p className="cardDescription">{card.description}</p>
            <button>
              order a delivery <MdDeliveryDining className="icon" />
            </button>
          </section>
        ))}
      </section>
    </main>
  );
};

export default Main;
