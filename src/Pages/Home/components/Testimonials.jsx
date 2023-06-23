import React from "react";
import profile_1 from "../../../assets/images/3ca412176fe4306326b04a78b51fa148c49f99c1.svg";
import profile_2 from "../../../assets/images/b64f988f077b50ffdab0afee9de4d701e4a9d5da.svg";
import profile_3 from "../../../assets/images/08c5772c481233a30a46aeca552132053604e2a8.svg";
import profile_4 from "../../../assets/images/44dd2beb0c06094368ffbb7fa1843005cfdae174.svg";
import TestimonialCard from "../../../assets/components/TestimonialCard";
import "../css/_Testimonials.scss";

const cards = [
  {
    id: 1,
    name: "Liam Parker",
    rateValue: 4,
    comment:
      "Loved Little Lemon! Great atmosphere, impeccable service, and delicious food. Highly recommended!",
    Image: profile_1,
  },
  {
    id: 2,
    name: "Max Johnson",
    rateValue: 5,
    comment:
      "I can't get enough of Little Lemon! From the cozy ambiance to the mouthwatering flavors, everything is top-notch. My new favorite spot!",
    Image: profile_2,
  },
  {
    id: 3,
    name: "Ava Collins",
    rateValue: 5,
    comment:
      "Little Lemon never fails to impress! The attentive staff, flavorful dishes, and overall dining experience are consistently outstanding. A must-visit!",
    Image: profile_3,
  },
  {
    id: 4,
    name: "Mia Sullivan",
    rateValue: 4,
    comment:
      "Delightful experience at Little Lemon! Cozy ambiance, diverse menu, and attentive staff. A new favorite!",
    Image: profile_4,
  },
];

const Testimonials = () => {
  return (
    <div className="rating">
      <p className="h1">testimonials</p>
      <section className="ratingSection">
        {cards.map((card) => (
          <TestimonialCard
            key={card.id}
            rate={card.rateValue}
            image={card.Image}
            name={card.name}
            comment={card.comment}
          />
        ))}
      </section>
    </div>
  );
};

export default Testimonials;
