import React from 'react'
import { Rating } from "@material-tailwind/react";
import "../../assets/css/_TestimonialCard.scss";
const TestimonialCard = ({rate,image, name, comment}) => {
  return (
    <div className="testimonialCard">
    <div>
      <Rating value={rate} readonly className="stars" />
      <div className="profile">
        <img src={image} alt="mainLogo" className="mainLogo"></img>
        <p>{name}</p>
      </div>
    </div>
    <p className="comment">{comment}</p>
  </div>
  )
}

export default TestimonialCard