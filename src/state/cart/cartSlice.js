import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        meals: [],
        toggle: false,
        count: [],
        status: 'idle',
        error: null,
    },
    reducers: {
        cartAddItem: (state, action) => {
            state.meals.push(action.payload);
            state.count.push(1);
        },
        cartRemoveItem: (state, action) => {
            state.meals.splice(action.payload, 1);
            state.count.splice(action.payload, 1);
        },
        cartToggle: (state, action) => {
            state.toggle = action.payload;
        },
        cartClear: (state) => {
            state.meals = [];
            state.count = [];
        },
        countChange: (state, action) => {
            const { type, index } = action.payload;
            switch (type) {
                case "increment": state.count[index] += 1
                    break;
                case "decrement": state.count[index] -= 1;
                    break;
                default:
                    break;
            }
        }
    }
})

export default cartSlice.reducer;
export const { cartAddItem, cartRemoveItem, cartToggle, cartClear, countChange } = cartSlice.actions;
