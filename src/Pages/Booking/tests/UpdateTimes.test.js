import { updateTimes } from "../BookingPage";

describe("updateTimes", () => {
  it("should update available times", () => {
    const dispatchMock = jest.fn();
    updateTimes(dispatchMock);

    // Assert that the dispatch function was called with the updated times
    const updatedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    expect(dispatchMock).toHaveBeenCalledWith({
      type: "UPDATE_TIMES",
      times: updatedTimes,
    });
  });
});
