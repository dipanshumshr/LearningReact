import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../features/themeSwitch/themeSlice"

export const store = configureStore({
    reducer : {
        theme : themeReducer
    }
})