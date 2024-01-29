import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"

export const fetchMeals = createAsyncThunk(
    'foodMenu/fetchMeals',
    async () => {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=');
        return response.data.meals;
    }
);

const foodMenuSlice = createSlice({
    name: 'foodMenu',
    initialState: {
        meals: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMeals.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchMeals.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.meals = action.payload;
            })
            .addCase(fetchMeals.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    },
});

export default foodMenuSlice.reducer;