import React, { useState } from "react";
import bookingLogo from "../../../assets/icons/Tables.jpg";
import "../css/_BookingForm.scss";
import Button from "../../../assets/components/Button";
import { Link } from "react-router-dom";

const BookingForm = ({
  date,
  time,
  setTime,
  guests,
  setGuests,
  occasion,
  setOccasion,
  availableTimes,
  firstName,
  setFirstName,
  lastName,
  setLastName,
  handleDateChange,
  submitForm,
}) => {
  const [inputType, setInputType] = useState("text");

  const handleDateFocus = () => {
    setInputType("date");
  };
  return (
    <div className="formSection">
      <img src={bookingLogo} alt="bookingLogo" className="bookingLogo"></img>

      <form onSubmit={(e) => submitForm(e, {firstName, lastName ,date, time, guests, occasion })} className="form">
        <label htmlFor="first-Name">
          First Name <sup>*</sup>
        </label>
        <input
          id="first-Name"
          type="text"
          value={firstName}
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label htmlFor="last-Name">
          Last Name <sup>*</sup>
        </label>
        <input
          id="last-Name"
          type="text"
          value={lastName}
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
        />
        <label htmlFor="res-date">
          Choose date <sup>*</sup>
        </label>
        <input
          id="res-date"
          value={date}
          placeholder="Choose date"
          type={inputType}
          onFocus={handleDateFocus}
          onChange={(e) => handleDateChange(e)}
        />
        <label htmlFor="res-time">
          Choose time <sup>*</sup>
        </label>
        <select
          id="res-time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        >
          {availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
        <label htmlFor="guests">
          Number of guests <sup>*</sup>
        </label>
        <input
          id="guests"
          type="number"
          placeholder="Number of Guests"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
        />
        <label htmlFor="occasion">
          Occasion <sup>*</sup>
        </label>
        <select
          id="occasion"
          placeholder="Occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <Link
          to="/booking/confirm"
          state={{ firstName, lastName, date, time, guests, occasion }}
        ></Link>
        <Button type="submit" text={"Submit Reservation"} />
      </form>
    </div>
  );
};

export default BookingForm;
