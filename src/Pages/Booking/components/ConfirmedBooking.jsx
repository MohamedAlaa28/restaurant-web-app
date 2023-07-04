import React from "react";
import "../css/_ConfirmedBooking.scss";
import confirmLogo from "../../../assets/images/compressed/confirm.jpg";
import { useLocation } from "react-router-dom";
const ConfirmedBooking = () => {
  const location = useLocation();
  const { firstName, lastName, date, time, guests, occasion } =
    location.state || {};

  return (

    <div className="Confirmation">
      <p>Booking Details</p>
      <section>
        <img src={confirmLogo} alt="confirmLogo" className="confirmLogo"></img>
        <table className="booking-table">
          <tbody>
            <tr>
              <td>First Name :</td>
              <td>{firstName}</td>
            </tr>
            <tr>
              <td>Last Name :</td>
              <td>{lastName}</td>
            </tr>
            <tr>
              <td>Date :</td>
              <td>{date}</td>
            </tr>
            <tr>
              <td>Time :</td>
              <td>{time}</td>
            </tr>
            <tr>
              <td>Number Of Guests :</td>
              <td>{guests}</td>
            </tr>
            <tr>
              <td>Occasion :</td>
              <td>{occasion}</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default ConfirmedBooking;
