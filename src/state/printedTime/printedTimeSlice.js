import { createSlice } from "@reduxjs/toolkit";
import { fetchAPI } from "../../utilities/dataAPIs";
import { formatTime } from "../../utilities/formatFunctions";


const initializeTimes = () => {
    const currentDate = new Date();
    const times = fetchAPI(currentDate);
    const availableTimes = times.map(formatTime);
    return availableTimes.length > 0 ? availableTimes : ["No available times"];
};

const printedTimeSlice = createSlice({
    name: 'printedTime',
    initialState: initializeTimes(),
    reducers: {
        availableTimes: (action) => {
            return action.payload;
        }
    }
})

export default printedTimeSlice.reducer;
export const { availableTimes } = printedTimeSlice.actions;