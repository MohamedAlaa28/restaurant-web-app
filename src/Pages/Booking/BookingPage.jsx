import React, { useReducer, useState } from "react";
import BookingForm from "./components/BookingForm";
import Nav from "../Home/components/Nav";
import { availableTimesReducer } from "./reducers/availableTimesReducer";

export const initializeTimes = () => {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

export const updateTimes = (dispatch) => {
  const updatedTimes = initializeTimes();
  dispatch({ type: "UPDATE_TIMES", times: updatedTimes });
};

const BookingPage = () => {
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [date, setDate] = useState("");
  const [availableTimes, dispatch] = useReducer(
    availableTimesReducer,
    initializeTimes()
  );
  const handleDateChange = (e) => {
    setDate(e.target.value)
    updateTimes(dispatch);
  };

  return (
    <div>
      <Nav />
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
      />
    </div>
  );
};

export default BookingPage;
