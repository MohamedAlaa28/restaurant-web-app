import React, { useContext } from "react";
// import "../css/_BookingForm.scss";
import BookingPageOne from "./BookingPhaseOne";
import BookingPageTwo from "./BookingPhaseTwo";
import { FormContext } from "../BookingPage";
import { fetchAPI } from "../../../utilities/dataAPIs";

export const alertNameFunction = (e) => {
  if (e.target.value.trim() === "") {
    return <p>you have to enter your name</p>;
  } else if (/\d/.test(e.target.value)) {
    return <p>the name can't have a number</p>;
  }
};

export const dinersOptions = () => {
  for (let i = 1; i <= 10; i++) {
    <option value="">{i} + diner</option>;
  }
};

export const initializeTimes = () => {
  const currentDate = new Date();
  const times = fetchAPI(currentDate);
  const availableTimes = times.map(tConvert);
  return availableTimes.length > 0 ? availableTimes : ["No available times"];
};

export const updateTimes = (dispatch, selectedDate) => {
  const times = fetchAPI(selectedDate);
  const updatedTimes = times.map(tConvert);
  dispatch({ type: "UPDATE_TIMES", times: updatedTimes });
};

export const tConvert = (time) => {
  // Check correct time format and split into components
  time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [
    time,
  ];

  if (time.length > 1) {
    // If time format correct
    time = time.slice(1); // Remove full string match value
    time[5] = +time[0] < 12 ? " AM" : " PM";
    time[0] = +time[0] % 12 || 12; // Adjust hours
    return time.join(""); // return adjusted time
  }

  return ""; // return empty string for incorrect format
};

export const handleChange =
  (setState, validateFunction, alertFunction) => (e) => {
    const isValid = validateFunction(e);
    const alert = alertFunction(e);
    setState((prevState) => ({
      ...prevState,
      value: e.target.value,
      isTouched: true,
      valid: isValid,
      alert: alert,
    }));
  };

const BookingForm = () => {
  const data = useContext(FormContext);

  return (
    <section className="booking-section">
      {/* {data.numberOfFromPage} */}
      {data.numberOfFromPage === 1 ? (
        //page one
        <BookingPageOne />
      ) : (
        //page two
        <BookingPageTwo />
      )}
      {/* <img src={bookingLogo} alt="bookingLogo" /> */}
    </section>
  );
};

export default BookingForm;
