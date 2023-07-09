import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { fetchAPI } from "../../../utilities/dataAPIs";
import React from "react";
import BookingForm from "../components/BookingForm";

describe("Booking Form", () => {
  it("form should submit", () => {
    const handleSubmit = jest.fn();
    const selectedDate = new Date("2023-03-15");
    const availableTimes = fetchAPI(selectedDate);

    render(
      <BrowserRouter>
        <BookingForm
          submitForm={handleSubmit}
          availableTimes={availableTimes}
          firstName=""
          setFirstName={() => {}}
          lastName=""
          setLastName={() => {}}
          date=""
          time=""
          setTime={() => {}}
          guests=""
          setGuests={() => {}}
          occasion=""
          setOccasion={() => {}}
          firstNameValid=""
          lastNameValid=""
          dateValid=""
          guestsValid=""
          firstNameIsTouched=""
          lastNameIsTouched=""
          dateIsTouched=""
          guestsIsTouched=""
          handleChange={() => {}}
          handleDateChange={() => {}}
        />
      </BrowserRouter>
    );

    // Assert that the form fields have the correct attributes
    expect(screen.getByLabelText(/first name/i)).toHaveAttribute(
      "type",
      "text"
    );
    expect(screen.getByLabelText(/first name/i)).toBeRequired();
    expect(screen.getByLabelText(/last name/i)).toHaveAttribute("type", "text");
    expect(screen.getByLabelText(/last name/i)).toBeRequired();
    expect(screen.getByLabelText(/choose date/i)).toHaveAttribute(
      "type",
      "date"
    );
    expect(screen.getByLabelText(/choose date/i)).toBeRequired();
    expect(screen.getByLabelText(/choose time/i).tagName).toBe("SELECT");
    expect(screen.getByLabelText(/choose time/i)).toBeRequired();
    expect(screen.getByLabelText(/number of guests/i)).toHaveAttribute(
      "type",
      "number"
    );
    expect(screen.getByLabelText(/number of guests/i)).toBeRequired();
    expect(screen.getByLabelText(/occasion/i).tagName).toBe("SELECT");
    expect(screen.getByLabelText(/occasion/i)).toBeRequired();
  });

  it("disables the submit button when the form is invalid", () => {
    render(
      <BookingForm
        firstName=""
        lastName=""
        date=""
        time=""
        guests=""
        occasion=""
        firstNameValid={false}
        lastNameValid={false}
        dateValid={false}
        guestsValid={false}
        firstNameIsTouched={true}
        lastNameIsTouched={true}
        dateIsTouched={true}
        guestsIsTouched={true}
        setFirstName={() => {}}
        setLastName={() => {}}
        setTime={() => {}}
        setGuests={() => {}}
        setOccasion={() => {}}
        availableTimes={[]}
        handleDateChange={() => {}}
        submitForm={() => {}}
      />
    );

    const submitButton = screen.getByText("Submit Reservation");
    expect(submitButton).toBeDisabled();
  });
  it("enables the submit button when the form is valid", () => {
    render(
      <BookingForm
        firstName="Mohamed"
        lastName="Alaa"
        date="2023-03-15"
        time="18:00"
        guests="4"
        occasion="Birthday"
        firstNameValid={true}
        lastNameValid={true}
        dateValid={true}
        guestsValid={true}
        firstNameIsTouched={true}
        lastNameIsTouched={true}
        dateIsTouched={true}
        guestsIsTouched={true}
        setFirstName={() => {}}
        setLastName={() => {}}
        setTime={() => {}}
        setGuests={() => {}}
        setOccasion={() => {}}
        availableTimes={["18:00", "19:00"]}
        handleDateChange={() => {}}
        submitForm={() => {}}
      />
    );

    const submitButton = screen.getByText("Submit Reservation");
    expect(submitButton).toBeEnabled();
  });
});
