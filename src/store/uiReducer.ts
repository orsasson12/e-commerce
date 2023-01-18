import {createSlice} from '@reduxjs/toolkit'

interface uiSliceState {
    appbarIsVisible:Boolean,
    cartModalIsVisible:Boolean
}
const initialState:uiSliceState = {
    appbarIsVisible:false,
    cartModalIsVisible:false
}
const uiSlice = createSlice({
    name:'ui',
   initialState,
   reducers:{
        toggleAppbar(state){
            state.appbarIsVisible = !state.appbarIsVisible
        },
        toggleCart(state){
            state.cartModalIsVisible = !state.cartModalIsVisible
        }
   }
})


export const uiActions = uiSlice.actions

export default uiSlice