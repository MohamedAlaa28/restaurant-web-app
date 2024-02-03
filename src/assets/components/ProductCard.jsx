import React from "react";
import { MdDeliveryDining } from "react-icons/md";
import "../css/_ProductCard.scss";
import LazyLoad from "react-lazyload";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartAddItem, cartToggle } from "../../state/cart/cartSlice";

const ProductCard = ({ meal }) => {
  const sideBarMeals = useSelector((state) => (state.cart.meals))
  const dispatch = useDispatch();

  const getRandomPrice = () => {
    const min = 5;
    const max = 100;
    const randomPrice = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomPrice;
  };

  const navigate = useNavigate();
  const handleClickLink = (meal) => {
    navigate(`/product/${meal.idMeal}`, { state: { meal: meal } });
  };

  const addToCart = (meal) => {
    dispatch(cartToggle(true))
    if (!sideBarMeals.includes(meal)) {
      dispatch(cartAddItem(meal))
    }
  };

  return (
    <main className="product-card">
      <header>
        <LazyLoad>
          <img src={meal.strMealThumb} alt={`productLogo ${meal.idMeal}`} onClick={() => handleClickLink(meal)} aria-label="On Click"></img>
        </LazyLoad>
      </header>
      <article>
        <div className="h3">
          <p>{meal.strMeal}</p>
          <p className="price">{getRandomPrice()} £</p>
        </div>
        <p className="card-description">{meal.strInstructions}</p>
        <button
          className="card-button h3"
          onClick={() => addToCart(meal)}
          aria-label="On Click"
        >
          Order a Delivery &nbsp;
          <MdDeliveryDining className="icon" />
        </button>
      </article>
    </main>
  );
};

export default ProductCard;
