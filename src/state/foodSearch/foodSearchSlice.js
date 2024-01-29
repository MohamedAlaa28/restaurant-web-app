import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"

export const searchMeals = createAsyncThunk(
    'foodSearch/searchMeals',
    async (searchValue) => {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`);
        return response.data.meals;
    }
);

const foodSearchSlice = createSlice({
    name: 'foodSearch',
    initialState: {
        meals: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(searchMeals.fulfilled, (state, action) => {
                state.meals = action.payload;
            });
    },
});

export default foodSearchSlice.reducer;