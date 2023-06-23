import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import BookingForm from "../components/BookingForm";
import { fetchAPI } from "../../../utilities/dataAPIs";
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
          date=""
          time=""
          setTime={() => {}}
          guests=""
          setGuests={() => {}}
          occasion=""
          setOccasion={() => {}}
          firstName=""
          setFirstName={() => {}}
          lastName=""
          setLastName={() => {}}
          handleDateChange={() => {}}
        />
      </BrowserRouter>
    );

    // Fill in the form fields
    fireEvent.change(screen.getByLabelText(/first name/i), {
      target: { value: "Mohamed" },
    });
    fireEvent.change(screen.getByLabelText(/last name/i), {
      target: { value: "Alaa" },
    });
    fireEvent.change(screen.getByLabelText(/choose date/i), {
      target: { value: "2023-06-16" },
    });
    fireEvent.change(screen.getByLabelText(/choose time/i), {
      target: { value: "18:00" },
    });
    fireEvent.change(screen.getByLabelText(/number of guests/i), {
      target: { value: "4" },
    });
    fireEvent.change(screen.getByLabelText(/occasion/i), {
      target: { value: "Birthday" },
    });

    // Submit the form
    fireEvent.click(screen.getByText(/submit reservation/i));

    // Assert that the handleSubmit function was called
    expect(handleSubmit).toHaveBeenCalled();
  });
});
