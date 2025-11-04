// JavaScript source code
import { configureStore } from "@reduxjs/toolkit"

const store = configureStore({
    reducer: {
        cart: configureStore
    }

})

export default store