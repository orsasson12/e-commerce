/* eslint-disable @typescript-eslint/no-unused-expressions */
import {createSlice} from '@reduxjs/toolkit'
    interface Item {
    id:string
    title:string,
    price:number,
    quantity:number,
    totalPrice:number,
    description:string
    }
    interface cartSliceState {
        items:Item[],
        totalQuantity:number
    }
    const initialState : cartSliceState = {
        items:[],
        totalQuantity:0
    }



const cartSlice = createSlice({
name:'cart',
initialState,
reducers:{
        addItemToCart(state,action){
            // getting a new item on a click
            const newItem = action.payload
            // checking if the newItem is already inside of the array
            const existingItem = state.items.find(item => item.id === newItem.id)
            // we need to update the total quantity no matter if exist or not
            state.totalQuantity++
            // if we dont have this kind of item so we need to push him in the array
            if(!existingItem){
                state.items.push({
                    id:newItem.id,
                    title:newItem.title,
                    price:newItem.price,
                    quantity:newItem.quantity,
                    totalPrice:newItem.totalPrice,
                    description:newItem.description
                })
            } else {
                // if we do have the item in the array we will not push it but we will update the quantity and the price
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state,action) {
        // getting the id from the item
         const id = action.payload
         // we know that the item is exist but we are doing that for checking the quantity and "play" with that item
         const existingItem = state.items.find(item => item.id !== id)
         state.totalQuantity--
         if(existingItem?.quantity === 1){
            state.items = state.items.filter(item => item.id !== id)
         }if(existingItem){
             existingItem.quantity--;
             existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
         }
    }
}
})



export const cartActions = cartSlice.actions

export default cartSlice