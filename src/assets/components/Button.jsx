import React from "react";
import "../css/_Button.scss";

const Button = ({ type, text, disabled, onClick }) => {
  return (
    <button
      type={type}
      className="button"
      // class="lemon-button"
      disabled={disabled}
      onClick={onClick}
      aria-label="On Click"
    >
      {text}
    </button>
  );
};

export default Button;
