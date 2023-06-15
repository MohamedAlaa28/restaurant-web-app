import React from "react";
import aboutLogo_1 from "../assets/icons/restaurant.jpg";
import aboutLogo_2 from "../assets/icons/restaurant_1.jpg";
// import "../assets/css/_About.scss";
import "../assets/css/_About.scss";
const About = () => {
  return (
    <about className="about">
      <section className="textSection">
        <p className="h1">little lemon</p>
        <p className="h3">chicago</p>
        <p className="p">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet sint. Velit officia consequat
          duis enim velit mollit.
        </p>
        {/* <button>reserve table</button> */}
      </section>
      <section className="imagesSection">
        <img src={aboutLogo_1} alt="aboutLogo_1" className="headerLogo headerLogoHoverDis"></img>
        
        <img
          src={aboutLogo_2}
          alt="aboutLogo_2"
          className="headerLogoOver headerLogo"
        ></img>
        <img src={aboutLogo_1} alt="aboutLogo_1" className="headerLogo headerLogoHoverAppear"></img>
      </section>
    </about>
  );
};

export default About;
