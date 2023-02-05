import { createSlice } from "@reduxjs/toolkit";

export interface uiSliceState {
  [x: string]: any;
  appbarIsVisible: Boolean;
  cartModalIsVisible: Boolean;
  sortIsVisible: Boolean;
}

const initialState: uiSliceState = {
  appbarIsVisible: false,
  cartModalIsVisible: false,
  sortIsVisible: false,
};
const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleAppbar(state) {
      state.appbarIsVisible = !state.appbarIsVisible;
    },
    toggleCart(state) {
      state.cartModalIsVisible = !state.cartModalIsVisible;
    },
    toggleSort(state) {
      state.sortIsVisible = !state.sortIsVisible;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
