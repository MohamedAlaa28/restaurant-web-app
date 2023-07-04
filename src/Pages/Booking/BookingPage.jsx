import React, { useReducer, useState } from "react";
import BookingForm, { validateDateFunction } from "./components/BookingForm";
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
  const [firstName, setFirstName] = useState({
    value: "",
  });
  const [lastName, setLastName] = useState({
    value: "",
  });
  const [date, setDate] = useState({
    value: "",
  });
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState({
    value: "",
  });
  const [occasion, setOccasion] = useState("");
  const [availableTimes, dispatch] = useReducer(
    availableTimesReducer,
    initializeTimes()
  );

  const handleDateChange = (e) => {
    const selectedDate = new Date(e.target.value);
    updateTimes(dispatch, selectedDate);
    const isValid = validateDateFunction(e);
    setDate({ value: e.target.value, isTouched: true, valid: isValid });
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
      <BookingForm
        firstName={firstName.value}
        lastName={lastName.value}
        date={date.value}
        time={time}
        guests={guests.value}
        occasion={occasion}
        firstNameValid={firstName.valid}
        lastNameValid={lastName.valid}
        dateValid={date.valid}
        guestsValid={guests.valid}
        firstNameIsTouched={firstName.isTouched}
        lastNameIsTouched={lastName.isTouched}
        firstNameAlert={firstName.alert}
        guestsAlert={guests.alert}
        lastNameAlert={lastName.alert}
        dateIsTouched={date.isTouched}
        guestsIsTouched={guests.isTouched}
        setFirstName={setFirstName}
        setLastName={setLastName}
        setTime={setTime}
        setGuests={setGuests}
        setOccasion={setOccasion}
        availableTimes={availableTimes}
        handleDateChange={handleDateChange}
        submitForm={submitForm}
      />
    </div>
  );
};

export default BookingPage;
