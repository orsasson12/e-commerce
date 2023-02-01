import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./uiReducer";
import cartSlice from "./cartReducer";
import productSlice from "./productsReducer";
const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    cart: cartSlice.reducer,
    product: productSlice.reducer,
  },
});

export default store;
