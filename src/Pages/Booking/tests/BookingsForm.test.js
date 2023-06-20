import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "../components/BookingForm";

test("form should submit", () => {
  const handleSubmit = jest.fn();
  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

  render(
    <BookingForm
      handleSubmit={handleSubmit}
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
  );

  // Fill in the form fields
  fireEvent.change(screen.getByLabelText(/first name/i), {
    target: { value: "John" },
  });
  fireEvent.change(screen.getByLabelText(/last name/i), {
    target: { value: "Doe" },
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
