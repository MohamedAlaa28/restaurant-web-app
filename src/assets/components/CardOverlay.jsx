import React from "react";
import "../css/_CardOverlay.scss";
import { AiOutlineClose } from "react-icons/ai";

const CardOverlay = ({ toggle, setToggle, title, content }) => {
  return (
    <div
      className="overlay"
      onClick={() => setToggle(!toggle)}
      aria-label="On Click"
    >
      <div
        className="body-section"
        onClick={(e) => e.stopPropagation()}
        aria-label="On Click"
      >
        <div className="title">
          <p className="h3">{title}</p>
          <AiOutlineClose
            className="close-icon"
            onClick={() => setToggle(!toggle)}
            aria-label="On Click"
          />
        </div>
        {content}
      </div>
    </div>
  );
};

export default CardOverlay;
