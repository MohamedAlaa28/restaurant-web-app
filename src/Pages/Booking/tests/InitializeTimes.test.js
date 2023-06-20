// import BookingPage from "../BookingPage";
import { initializeTimes } from "../BookingPage";

describe("initializeTimes", () => {
  it("should return the initial list of available times", () => {
    const expectedTimes = [
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
    ];
    const actualTimes = initializeTimes();

    // Assert the expected output matches the actual output
    expect(actualTimes).toEqual(expectedTimes);
  });
});
