import React from "react";
import "../css/_ConfirmedBooking.scss";
import confirmLogo from "../../../assets/icons/confirm.jpg";
import { useLocation } from "react-router-dom";

const ConfirmdBooking = () => {
  const location = useLocation();
  const { firstName, lastName, date, time, guests, occasion } =
    location.state || {};

  return (
    <div className="Confirmation">
      <p>Booking Details</p>
      <section>
        <table className="booking-table">
          {/* <thead>
            <tr>
              <th>Details</th>
              <th>Information</th>
            </tr>
          </thead> */}
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
        <img
          src={confirmLogo}
          alt="confirmLogo"
          className="confirmLogo"
        ></img>
      </section>
    </div>
  );
};

export default ConfirmdBooking;
