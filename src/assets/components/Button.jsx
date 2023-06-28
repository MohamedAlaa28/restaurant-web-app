import React from "react";
import "../css/_Button.scss";

const Button = ({ type, text, disabled, onClick}) => {
  return (
    <button
      type={type}
      className='button'
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
