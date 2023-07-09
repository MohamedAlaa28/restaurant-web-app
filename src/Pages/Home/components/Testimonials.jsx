import React from "react";
import profile_1 from "../../../assets/images/300-1.jpg";
import profile_2 from "../../../assets/images/300-7.jpg";
import profile_3 from "../../../assets/images/300-6.jpg";
import profile_4 from "../../../assets/images/300-5.jpg";
import profile_5 from "../../../assets/images/300-2.jpg";
import TestimonialCard from "../../../assets/components/TestimonialCard";
import SliderSection from "../../../assets/components/SliderSection";
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
      "Little Lemon never fails to impress! The attentive staff, flavorful dishes, and overall dining experience are consistently outstanding",
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
  {
    id: 5,
    name: "Mia Sullivan",
    rateValue: 5,
    comment:
      "Delightful experience at Little Lemon! Cozy ambiance, diverse menu, and attentive staff. A new favorite!",
    Image: profile_5,
  },
];

const Testimonials = () => {

  return (
    <section className="testimonials">
      <p className="h1">testimonials</p>
      <SliderSection type="testimonials" cardsData={cards} Card={TestimonialCard}/>
    </section>
  );
};

export default Testimonials;