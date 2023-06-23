import React, { useReducer, useState } from "react";
import BookingForm from "./components/BookingForm";
import Nav from "../Home/components/Nav";
import Header from "./components/Header";
import { fetchAPI, submitAPI } from "../../utilities/dataAPIs";
import { availableTimesReducer } from "./reducers/AvailableTimesReducer";
import { useNavigate } from "react-router-dom";

export const initializeTimes = () => {
  const currentDate = new Date();
  const availableTimes = fetchAPI(currentDate);
  return availableTimes.length > 0 ? availableTimes : ["No available times"];
};

export const updateTimes = (dispatch, selectedDate) => {
  const updatedTimes = fetchAPI(selectedDate);
  dispatch({ type: "UPDATE_TIMES", times: updatedTimes });
};

const BookingPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");
  const [date, setDate] = useState("");
  const [availableTimes, dispatch] = useReducer(
    availableTimesReducer,
    initializeTimes()
  );
  const handleDateChange = (e) => {
    const selectedDate = new Date(e.target.value);
    setDate(e.target.value);
    updateTimes(dispatch, selectedDate);
  };

  const navigate = useNavigate();
  const submitForm = (e, formData) => {
    e.preventDefault();
    const success = submitAPI(formData);
    if (success) {
      // Retrieve existing data from local storage
      const existingData = localStorage.getItem("bookingData");
      let newData = [];
      if (existingData) {
        newData = JSON.parse(existingData);
      }

      // Add new booking to the existing data
      newData.push(formData);

      // Store the updated data back in local storage
      localStorage.setItem("bookingData", JSON.stringify(newData));

      navigate("/confirm", { state: formData });
    }
  };

  return (
    <div>
      <Nav />
      <Header />
      <BookingForm
        date={date}
        setDate={setDate}
        time={time}
        setTime={setTime}
        guests={guests}
        setGuests={setGuests}
        occasion={occasion}
        setOccasion={setOccasion}
        availableTimes={availableTimes}
        firstName={firstName}
        setFirstName={setFirstName}
        lastName={lastName}
        setLastName={setLastName}
        handleDateChange={handleDateChange}
        submitForm={submitForm}
      />
    </div>
  );
};

export default BookingPage;
