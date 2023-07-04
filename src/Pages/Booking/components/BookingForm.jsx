import React from "react";
import bookingLogo from "../../../assets/images/compressed/Tables.jpg";
import "../css/_BookingForm.scss";
import Button from "../../../assets/components/Button";

export const validateNameFunction = (e) => {
  const isValid = e.target.value.trim() !== "" && !/\d/.test(e.target.value);
  return isValid;
};

export const validateDateFunction = (e) => {
  const currentDate = new Date();
  const selectedDate = new Date(e.target.value);
  const isValid = selectedDate > currentDate;
  return isValid;
};

export const validateGuestsFunction = (e) => {
  const isValid = e.target.value >= 1 && e.target.value <= 25;
  return isValid;
};

export const alertNameFunction = (e) => {
  if (e.target.value.trim() === "") {
    return <p>you have to enter your name</p>;
  } else if (/\d/.test(e.target.value)) {
    return <p>the name can't have a number</p>;
  }
};

export const alertGuestsFunction = (e) => {
  if (e.target.value.trim() === "") {
    return <p>you have to enter number of guests</p>;
  }else if (e.target.value < 1) {
    return <p>we can't reserve for no one</p>;
  } else if (e.target.value > 25) {
    return <p>maximum number is 25</p>;
  }
};

const BookingForm = ({
  firstName,
  lastName,
  date,
  time,
  guests,
  occasion,
  firstNameValid,
  lastNameValid,
  dateValid,
  guestsValid,
  firstNameIsTouched,
  lastNameIsTouched,
  firstNameAlert,
  lastNameAlert,
  guestsAlert,
  dateIsTouched,
  guestsIsTouched,
  setFirstName,
  setLastName,
  setTime,
  setGuests,
  setOccasion,
  availableTimes,
  handleDateChange,
  submitForm,
}) => {
  try {
    const getIsFormValid = () => {
      if (
        firstNameValid &&
        lastNameValid &&
        dateValid &&
        guestsValid &&
        time !== "" &&
        occasion !== ""
      ) {
        return true;
      }
    };

    const handleChange = (setState, validateFunction, alertFunction) => (e) => {
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

    return (
      <div>
        <p className="booking-header">book your table now</p>
        <div className="formSection">
          <img src={bookingLogo} alt="bookingLogo" className="bookingLogo" />

          <form
            onSubmit={(e) =>
              submitForm(e, {
                firstName,
                lastName,
                date,
                time,
                guests,
                occasion,
              })
            }
            className="form"
          >
            <label htmlFor="first-Name">
              First Name <sup>*</sup>
            </label>
            <input
              id="first-Name"
              type="text"
              value={firstName}
              placeholder="First Name"
              minLength="3"
              maxLength="10"
              onChange={handleChange(
                setFirstName,
                validateNameFunction,
                alertNameFunction
              )}
              required
            />
            {!firstNameValid && firstNameIsTouched && (
              <span className="error-message">{firstNameAlert}</span>
            )}

            <label htmlFor="last-Name">
              Last Name <sup>*</sup>
            </label>
            <input
              id="last-Name"
              type="text"
              value={lastName}
              placeholder="Last Name"
              minLength="3"
              maxLength="10"
              onChange={handleChange(
                setLastName,
                validateNameFunction,
                alertNameFunction
              )}
              required
            />
            {!lastNameValid && lastNameIsTouched && (
              <span className="error-message">{lastNameAlert}</span>
            )}

            <label htmlFor="res-date">
              Choose date <sup>*</sup>
            </label>
            <input
              id="res-date"
              value={date}
              placeholder="Choose date"
              type="date"
              onChange={(e) => handleDateChange(e)}
              required
            />
            {!dateValid && dateIsTouched && (
              <span className="error-message">
                Please enter a future valid date
              </span>
            )}

            <label htmlFor="res-time">
              Choose time <sup>*</sup>
            </label>
            <select
              id="res-time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            >
              <option value="">--Choose time--</option>
              {availableTimes &&
                availableTimes.map((time) => (
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
              min="1"
              max="25"
              value={guests}
              onChange={handleChange(
                setGuests,
                validateGuestsFunction,
                alertGuestsFunction
              )}
              onKeyDown={(evt) => {
                const isValidKey =
                  (evt.key >= "0" && evt.key <= "9") ||
                  evt.key === "Backspace" ||
                  evt.key === "Delete" ||
                  evt.key === "ArrowLeft" ||
                  evt.key === "ArrowRight" ||
                  evt.key === "Tab" ||
                  evt.key === "Enter";
                if (!isValidKey) {
                  evt.preventDefault();
                }
              }}
              required
            />
            {!guestsValid && guestsIsTouched && (
              <span className="error-message">
                {guestsAlert}
              </span>
            )}

            <label htmlFor="occasion">
              Occasion <sup>*</sup>
            </label>
            <select
              id="occasion"
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
              required
            >
              <option value="">--Occasion--</option>
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
            </select>

            <Button
              type="submit"
              text={"Submit Reservation"}
              disabled={!getIsFormValid()}
            />
          </form>
        </div>
      </div>
    );
  } catch (error) {
    console.error("An error occurred in the BookingForm component:", error);
    return <div>An error occurred. Please try again later.</div>;
  }
};

export default BookingForm;
