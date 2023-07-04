import React from "react";
import { FaUser } from "react-icons/fa";
import "../../assets/css/_SwitchCard.scss";
const SwitchCard = ({ icon, name }) => {
  return (
    <div className="switch-card">
      <div>
        <FaUser />
      </div>
      <p>name</p>
    </div>
  );
};

export default SwitchCard;
