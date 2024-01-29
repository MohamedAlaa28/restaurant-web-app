import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"

export const fetchMeals = createAsyncThunk(
    'foodMenu/fetchMeals',
    async () => {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=');
        return response.data.meals;
    }
);

export const fetchCategories = createAsyncThunk(
    'foodMenu/fetchCategories',
    async () => {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
        return response.data.categories;
    }
);

const foodMenuSlice = createSlice({
    name: 'foodMenu',
    initialState: {
        meals: [],
        categories: [],
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
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.categories = action.payload;
            })
    },
});

export default foodMenuSlice.reducer;