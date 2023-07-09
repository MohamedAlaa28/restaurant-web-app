import React, { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "../css/_SliderSection.scss";

const SliderSection = ({ type, cardsData, Card }) => {
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

  return (
    <section className="cards-section">
      <button className="prev-button" onClick={scrollLeft}>
        <FaArrowLeft />
      </button>

      <div className="cards" ref={cardsRef}>
        {type === "product"
          ? cardsData.map((cardData) => (
              <Card
                className="product-card"
                key={cardData.id}
                image={cardData.Image}
                name={cardData.name}
                price={cardData.price}
                description={cardData.description}
              />
            ))
          : cardsData.map((cardData) => (
              <Card
                className="product-card"
                key={cardData.id}
                rate={cardData.rateValue}
                image={cardData.Image}
                name={cardData.name}
                comment={cardData.comment}
              />
            ))}
      </div>
      <button className="next-button" onClick={scrollRight}>
        <FaArrowRight />
      </button>
    </section>
  );
};

export default SliderSection;