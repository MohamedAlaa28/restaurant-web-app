import React, { useEffect, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "../css/_SliderSection.scss";
import NotFound from "../images/NotFound.svg";
import { useDispatch, useSelector } from "react-redux";
import { fetchMeals } from "../../state/foodMenu/foodMenuSlice.js";

const SliderSection = ({ type, cardsData, Card }) => {
  const meals = useSelector((state) => (state.foodMenu.meals))
  const cardsRef = useRef(null);
  const scrollLeft = () => {
    cardsRef.current.scrollBy({
      left: -cardsRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    cardsRef.current.scrollBy({
      left: cardsRef.current.offsetWidth,
      behavior: "smooth",
    });
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMeals());
  }, [dispatch]);

  const ProductCards = () => {
    if (!meals || meals.length === 0) {
      return <img src={NotFound} alt="NotFound" className="notFound" />;
    }

    return meals.map((meal) => (
      <Card
        className="product-card"
        key={meal.idMeal}
        meal={meal}
      />
    ));
  };

  const TestimonialCards = () => {
    if (!cardsData || cardsData.length === 0) {
      return <img src={NotFound} alt="NotFound" className="notFound" />;
    }

    return cardsData.map((cardData) => (
      <Card
        className="product-card"
        key={cardData.id}
        rate={cardData.rateValue}
        image={cardData.Image}
        name={cardData.name}
        comment={cardData.comment}
      />
    ));
  };

  return (
    <section className="cards-section">
      <button className="prev-button" onClick={scrollLeft}>
        <FaArrowLeft />
      </button>

      <div className="cards" ref={cardsRef}>
        {type === "product" ? <ProductCards /> : <TestimonialCards />}
      </div>

      <button className="next-button" onClick={scrollRight}>
        <FaArrowRight />
      </button>
    </section>
  );
};

export default SliderSection;
