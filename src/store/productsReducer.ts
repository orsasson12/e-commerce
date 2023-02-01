import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Item } from "./cartReducer";
import { DUMMY_DATA_ITEMS } from "../DUMMY_DATA";
interface productSliceState {
  products: Item[];
  sortedProducts: Item[];

}


const initialState: productSliceState = {
  products: DUMMY_DATA_ITEMS,
  sortedProducts: []

};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    filterByCategory: (state, action: PayloadAction<string | "all">) => {
      const category = action.payload;
      if (category) {
        state.sortedProducts =
          category === "all"
            ? state.products
            : state.products.filter((item) => item.category === category);
      } else {
        state.sortedProducts = state.products;
      }
    },
    sortProductsByPrice: (
      state,
      action: PayloadAction<"low" | "high" | "normal">
    ) => {
      const sortMethod = action.payload;
      if (sortMethod === "normal") {
        state.sortedProducts = state.products;
      } else {
        state.sortedProducts = state.products.sort((a, b) => {
          return sortMethod === "low" ? a.price - b.price : b.price - a.price;
        });
      }
    },
  },
});


export const productActions = productSlice.actions;
export default productSlice;

