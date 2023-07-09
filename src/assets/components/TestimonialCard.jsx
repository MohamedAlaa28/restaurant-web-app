import React from "react";
import "../../assets/css/_TestimonialCard.scss";
import { RiStarSFill, RiStarSLine } from "react-icons/ri";
const TestimonialCard = ({ rate, image, name, comment }) => {
  const renderStars = () => {
    const filledStars = [];
    const emptyStars = [];

    for (let i = 1; i <= rate; i++) {
      filledStars.push(<RiStarSFill key={i} />);
    }

    for (let i = rate + 1; i <= 5; i++) {
      emptyStars.push(<RiStarSLine key={i} />);
    }

    return [...filledStars, ...emptyStars];
  };
  return (
    <div className="testimonial-card">
      <div>
        <div className="stars">{renderStars()}</div>
        <div className="profile">
          <img src={image} alt="mainLogo"></img>
          <p>{name}</p>
        </div>
      </div>
      <p className="comment">{comment}</p>
    </div>
  );
};

export default TestimonialCard;
