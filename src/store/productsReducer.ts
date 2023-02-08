import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Item } from "./cartReducer";

import { DUMMY_DATA_ITEMS } from "../DUMMY_DATA";
export interface productSliceState {
  products: Item[];
  sortedProducts: Item[];
  product: Item;
  categoryProducts: Item[];
}

export interface productType {
  product: productSliceState;
}

const initialState: productSliceState = {
  products: DUMMY_DATA_ITEMS,
  sortedProducts: [],
  product: {
    id: "",
    category: "",
    title: "",
    description: "",
    image: "",
    price: 0,
    quantity: 0,
    totalPrice: 0,
  },
  categoryProducts: [],
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
      const newArray = [...state.sortedProducts];

      if (sortMethod === "normal") {
        state.sortedProducts = state.products;
      } else {
        state.sortedProducts = newArray.sort((a, b) => {
          return sortMethod === "low" ? a.price - b.price : b.price - a.price;
        });
      }
    },
    fetchProduct: (state, action: PayloadAction<string>) => {
      const product = state.products.find((item) => item.id === action.payload);

      if (product) {
        state.categoryProducts = state.products.filter(
          (item) => item.category === product.category
        );
        state.product = { ...product };
      }
  
    },
  },
});

export const productActions = productSlice.actions;
export default productSlice;
