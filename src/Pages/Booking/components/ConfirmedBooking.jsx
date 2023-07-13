import React from "react";
import "../css/_ConfirmedBooking.scss";
import confirmLogo from "../../../assets/images/compressed/dogu-tuncer-SmhpzFvllmE-unsplash.jpg";
import { useLocation } from "react-router-dom";
const ConfirmedBooking = () => {
  const location = useLocation();
  const {
    firstName,
    lastName,
    date,
    time,
    guests,
    occasion,
    phoneNumber,
    email,
    seating,
  } = location.state || {};

  return (
    <div className="confirmation">
      <section>
        <img src={confirmLogo} alt="confirmLogo"></img>
        <table className="booking-table">
          <p className="confirm-header">Booking Details</p>
          <tbody>
            <tr>
              <td>
                <span>First Name </span>
              </td>
              <td>
                <span>:</span>
              </td>
              <td>
                <span>{firstName}</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>Last Name </span>
              </td>
              <td>
                <span>:</span>
              </td>
              <td>
                <span>{lastName}</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>Phone Number </span>
              </td>
              <td>
                <span>:</span>
              </td>
              <td>
                <span>{phoneNumber}</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>Email </span>
              </td>
              <td>
                <span>:</span>
              </td>
              <td>
                <span>{email}</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>Date </span>
              </td>
              <td>
                <span>:</span>
              </td>
              <td>
                <span>{date}</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>Time </span>
              </td>
              <td>
                <span>:</span>
              </td>
              <td>
                <span>{time}</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>Seating </span>
              </td>
              <td>
                <span>:</span>
              </td>
              <td>
                <span>{seating}</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>Number Of Guests </span>
              </td>
              <td>
                <span>:</span>
              </td>
              <td>
                <span>{guests}</span>
              </td>
            </tr>
            <tr>
              <td>
                <span>Occasion </span>
              </td>
              <td>
                <span>:</span>
              </td>
              <td>
                <span>{occasion}</span>
              </td>
            </tr>
          </tbody>
        </table>
        {/* <table className="booking-table">
          <tbody>
          
            <tr>
              <td>Occasion :</td>
              <td>{occasion}</td>
            </tr>
          </tbody>
        </table> */}
      </section>
    </div>
  );
};

export default ConfirmedBooking;
