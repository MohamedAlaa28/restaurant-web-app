import React, { useContext } from "react";
import "../css/_BookingPhaseTwo.scss";
import Button from "../../../assets/components/Button";
import { validateNameFunction } from "../../../utilities/validationFunction";
import { FormContext } from "../BookingPage";
import { submitAPI } from "../../../utilities/dataAPIs";
import { handleChange } from "./BookingForm";

export const alertNameFunction = (e) => {
  if (e.target.value.trim() === "") {
    return <p>you have to enter your name</p>;
  } else if (/\d/.test(e.target.value)) {
    return <p>the name can't have a number</p>;
  }
};

export const alertGuestsFunction = (e) => {
  if (e.target.value.trim() === "") {
    return <p>you have to enter the number of guests</p>;
  } else if (e.target.value < 1) {
    return <p>we can't reserve for no one</p>;
  } else if (e.target.value > 25) {
    return <p>maximum number is 25</p>;
  }
};

const BookingPhaseTwo = () => {
  const data = useContext(FormContext);
  const getIsFormValid = () => {
    if (
      data.firstNameValid &&
      data.lastNameValid &&
      data.dateValid &&
      data.guestsValid &&
      data.time !== "" &&
      data.occasion !== ""
    ) {
      return true;
    }
  };

  return (
    <section className="form-section">
      <form onSubmit={(e) => data.submitForm(e)} className="form">
        <label htmlFor="first-Name">First Name</label>
        <input
          id="first-Name"
          type="text"
          value={data.firstName}
          placeholder="First name"
          minLength="3"
          maxLength="10"
          onChange={handleChange(
            data.setFirstName,
            validateNameFunction,
            alertNameFunction
          )}
          required
        />
        {!data.firstNameValid && data.firstNameIsTouched && (
          <span className="error-message">{data.firstNameAlert}</span>
        )}

        <label htmlFor="last-Name">Last Name</label>
        <input
          id="last-Name"
          type="text"
          value={data.lastName}
          placeholder="Last name"
          minLength="3"
          maxLength="10"
          onChange={handleChange(
            data.setLastName,
            validateNameFunction,
            alertNameFunction
          )}
          required
        />
        {!data.lastNameValid && data.lastNameIsTouched && (
          <span className="error-message">{data.lastNameAlert}</span>
        )}

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          // value={data.lastName}
          placeholder="you@company.com"
          // onChange={handleChange(
          //   data.setLastName,
          //   validateNameFunction,
          //   alertNameFunction
          // )}
          required
        />

        <label htmlFor="last-Name">Phone Number</label>
        <input
          id="last-Name"
          type="tel"
          // value={data.lastName}
          // onChange={handleChange(
          //   data.setLastName,
          //   validateNameFunction,
          //   alertNameFunction
          // )}
          required
        />

        <label htmlFor="last-Name">Spacial Requests</label>
        <input
          id="last-Name"
          type="tel"
          // value={data.lastName}
          // onChange={handleChange(
          //   data.setLastName,
          //   validateNameFunction,
          //   alertNameFunction
          // )}
          required
        />

        <Button
          type="submit"
          text={"Submit Reservation"}
          disabled={!getIsFormValid()}
        />
      </form>
    </section>
  );
};

export default BookingPhaseTwo;
