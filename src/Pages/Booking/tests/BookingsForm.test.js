import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { fetchAPI } from "../../../utilities/dataAPIs";
import React from "react";
import BookingForm, {
  validateDateFunction,
  validateGuestsFunction,
  validateNameFunction,
} from "../components/BookingForm";

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

  //validateNameFunction//

  it("should return false when value is a whitespace", () => {
    const eventMock = {
      target: { value: " " },
    };

    const isValid = validateNameFunction(eventMock);

    expect(isValid).toBe(false);
  });

  it("should return true when value is not a whitespace", () => {
    const eventMock = {
      target: { value: "Mohamed Alaa" },
    };

    const isValid = validateNameFunction(eventMock);

    expect(isValid).toBe(true);
  });

  it("should return false when input contains a number", () => {
    const eventMock = {
      target: { value: "Mohamed Alaa 123" },
    };

    const isValid = validateNameFunction(eventMock);

    expect(isValid).toBe(false);
  });

  //validateDateFunction//

  it("should return false when selected date is before current date", () => {
    const eventMock = {
      target: { value: "2023-03-14" },
    };

    const isValid = validateDateFunction(eventMock);

    expect(isValid).toBe(false);
  });

  it("should return true when selected date is after current date", () => {
    const eventMock = {
      target: { value: "2033-03-16" },
    };

    const isValid = validateDateFunction(eventMock);

    expect(isValid).toBe(true);
  });

  it("should return false when selected date is the same as current date", () => {
    const currentDate = new Date();
    const eventMock = {
      target: { value: `${currentDate}` },
    };

    const isValid = validateDateFunction(eventMock);

    expect(isValid).toBe(false);
  });

  //validateGuestsFunction//

  it("should return false when number of guests is less than 1", () => {
    const eventMock = {
      target: { value: 0 },
    };

    const isValid = validateGuestsFunction(eventMock);

    expect(isValid).toBe(false);
  });

  it("should return false when number of guests is greater than 25", () => {
    const eventMock = {
      target: { value: 30 },
    };

    const isValid = validateGuestsFunction(eventMock);

    expect(isValid).toBe(false);
  });

  it("should return true when number of guests is between 1 and 25 (inclusive)", () => {
    const eventMock = {
      target: { value: 10 },
    };

    const isValid = validateGuestsFunction(eventMock);

    expect(isValid).toBe(true);
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
