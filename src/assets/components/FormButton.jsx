import React from "react";
import "../css/_FormButton.scss";

const FormButton = ({ value, isOpen, setIsOpen, renderValue }) => {
  const selectHeaderClasses = value
    ? "select-header selected"
    : `select-header ${isOpen ? "open" : ""}`;
  return (
    <div className={selectHeaderClasses} onClick={() => setIsOpen(!isOpen)}>
      {renderValue}
    </div>
  );
};

export default FormButton;
