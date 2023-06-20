import React from "react";
import bookingLogo from "../../../assets/icons/Tables.jpg";
import "../../../assets/css/_BookingForm.scss";

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
  handleSubmit,
}) => {
  const onSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    handleSubmit()
    console.log("Date:", date);
    console.log("Time:", time);
    console.log("Number of Guests:", guests);
    console.log("Occasion:", occasion);
  };

  return (
    <div className="formSection">
      <img src={bookingLogo} alt="bookingLogo" className="bookingLogo"></img>

      <form onSubmit={onSubmit} className="form">
      <label htmlFor="first-Name">First Name</label>
        <input
          id="first-Name"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label htmlFor="last-Name">Last Name</label>
        <input
          id="last-Name"
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <label htmlFor="res-date">Choose date</label>
        <input
          id="res-date"
          type="date"
          value={date}
          onChange={(e) => handleDateChange(e)}
        />
        <label htmlFor="res-time">Choose time</label>
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
        <label htmlFor="guests">Number of guests</label>
        <input
          id="guests"
          type="number"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
        />
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select> 
        <button type="submit">Submit Reservation</button>
      </form>
    </div>
  );
};

export default BookingForm;
