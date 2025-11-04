// JavaScript source code
import { createSlice } from "@reduxjs/toolkit"

const state = {
    items: [],
    products: 0,
    deletes:0
}

const Slice = createSlice({
    name: "cart",
    initialState: state,
    reducer: {
        addTocart: (state, action) => {
            if (initialState.items.length = 0) {
                
            }
        }


    }


})

export const { addTocart } = Slice.actions

export default Slice.reducer