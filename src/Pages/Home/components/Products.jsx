
import React from "react";
import product_1 from "../../../assets/images/compressed/edward-howell-R8HoXig87p8-unsplash.jpg";
import product_2 from "../../../assets/images/compressed/edward-howell-qle6cdKe2FY-unsplash.jpg";
import product_3 from "../../../assets/images/compressed/edward-howell-tFlpXzfxrzE-unsplash.jpg";
import product_4 from "../../../assets/images/compressed/edward-howell-TmJeUh0rc3c-unsplash.jpg";
import product_5 from "../../../assets/images/compressed/edward-howell-SIrhMCzeQaU-unsplash.jpg";
import product_6 from "../../../assets/images/compressed/edward-howell-mOI-3Ub14AE-unsplash.jpg";
import product_7 from "../../../assets/images/compressed/edward-howell-mvlWXqxjaJ4-unsplash.jpg";
import "../css/_Products.scss";
import ProductCard from "../../../assets/components/ProductCard";
import SliderSection from "../../../assets/components/SliderSection";
import { Link } from "react-router-dom";
import Button from "../../../assets/components/Button";


const cards = [
  {
    id: 1,
    name: "greek salad",
    price: "$12.99",
    description:
      "the famous greek salad of crispy lettuce, peppers, olives and our chicago style feta cheese, garnished with crunchy garlic and rosemary croutons",
    Image: product_1,
  },
  {
    id: 2,
    name: "bruchetta",
    price: "$5.99",
    description:
      "our bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil",
    Image: product_2,
  },
  {
    id: 3,
    name: "lemon dessert",
    price: "$5.00",
    description:
      "this comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined",
    Image:  product_3,
  },
  {
    id: 4,
    name: "greek salad",
    price: "$12.99",
    description:
      "the famous greek salad of crispy lettuce, peppers, olives and our chicago style feta cheese, garnished with crunchy garlic and rosemary croutons",
    Image: product_4,
  },
  {
    id: 5,
    name: "bruchetta",
    price: "$5.99",
    description:
      "our bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil",
    Image: product_5,
  },
  {
    id: 6,
    name: "lemon dessert",
    price: "$5.00",
    description:
      "this comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined",
    Image: product_6,
  },
  {
    id: 7,
    name: "greek salad",
    price: "$12.99",
    description:
      "the famous greek salad of crispy lettuce, peppers, olives and our chicago style feta cheese, garnished with crunchy garlic and rosemary croutons",
    Image: product_7,
  },
];

const Products = () => {
  return (
    <main className="main">
      <section className="titleSection">
        <p className="h1">this week's specials!</p>
        <div>
          <Link to={"./menu"}>
            <Button text={"online menu"} />
          </Link>
        </div>
      </section>
      <SliderSection type="product" cardsData={cards} Card={ProductCard} />
    </main>
  );
};

export default Products;