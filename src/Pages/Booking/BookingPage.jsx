import React, { createContext, useReducer, useState } from "react";
import BookingForm, {
  initializeTimes,
  updateTimes,
} from "./components/BookingForm";
import { availableTimesReducer } from "./reducer/AvailableTimesReducer";
import { validateDateFunction } from "../../utilities/validationFunction";
import { useNavigate } from "react-router-dom";
import { submitAPI } from "../../utilities/dataAPIs";

export const FormContext = createContext();

const BookingPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");
  const [availableTimes, dispatch] = useReducer(
    availableTimesReducer,
    initializeTimes()
  );
  const [numberOfFromPage, setNumberOfFromPage] = useState(1);

  const handleDateChange = (e) => {
    const selectedDate = new Date(e.target.value);
    updateTimes(dispatch, selectedDate);
    const isValid = validateDateFunction(e);
    setDate({ value: selectedDate, isTouched: true, valid: isValid });
  };

  const navigate = useNavigate();
  const submitForm = (e) => {
    e.preventDefault();
    const formData = {
      firstName: firstName.value,
      lastName: lastName.value,
      date: date.value,
      time: time.value,
      guests: guests.value,
      occasion: occasion.value,
    };
    const success = submitAPI(formData);
    if (success) {
      // // Retrieve existing data from local storage
      // const existingData = localStorage.getItem("bookingData");
      // let newData = [];
      // if (existingData) {
      //   newData = JSON.parse(existingData);
      // }
      // // Add new booking to the existing data
      // newData.push(formData);
      // // Store the updated data back in local storage
      // localStorage.setItem("bookingData", JSON.stringify(newData));
      navigate("/confirm", { state: formData });
    }
  };
  return (
    <div>
      <FormContext.Provider
        value={{
          firstName: firstName.value,
          lastName: lastName.value,
          date: date.value,
          time: time.value,
          guests: guests.value,
          occasion: occasion.value,
          firstNameValid: firstName.valid,
          lastNameValid: lastName.valid,
          dateValid: date.valid,
          guestsValid: guests.valid,
          firstNameIsTouched: firstName.isTouched,
          lastNameIsTouched: lastName.isTouched,
          firstNameAlert: firstName.alert,
          guestsAlert: guests.alert,
          lastNameAlert: lastName.alert,
          dateIsTouched: date.isTouched,
          guestsIsTouched: guests.isTouched,
          setFirstName: setFirstName,
          setLastName: setLastName,
          setTime: setTime,
          setGuests: setGuests,
          setOccasion: setOccasion,
          setDate: setDate,
          dispatch:dispatch,
          numberOfFromPage: numberOfFromPage,
          setNumberOfFromPage: setNumberOfFromPage,
          availableTimes: availableTimes,
          handleDateChange: handleDateChange,
          navigate: navigate,
          submitForm: submitForm,
        }}
      >
        <BookingForm />
      </FormContext.Provider>
    </div>
  );
};

export default BookingPage;
