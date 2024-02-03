import { configureStore } from "@reduxjs/toolkit";
import foodMenuSlice from "./foodMenu/foodMenuSlice";
import printedTimeSlice from "./printedTime/printedTimeSlice";
import foodSearchSlice from "./foodSearch/foodSearchSlice";
import cartSlice from "./cart/cartSlice";

export const store = configureStore({
    reducer: {
        foodMenu: foodMenuSlice,
        foodSearch: foodSearchSlice,
        times: printedTimeSlice,
        cart:cartSlice,
    },
})

// export const RootState = typeof store.getState;
// export const AppDispatch = typeof store.dispatch;