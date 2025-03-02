import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode : "light"
}

const themeSlice = createSlice({
    name : "theme",
    initialState,
    reducers : {
        toggleTheme : (state, action) => {
            if(action.payload.mode ==="light")
                state.mode = "light"
            else if(action.payload.mode === "dark")
                state.mode = "dark"
        }
    }
})

export const {toggleTheme} = themeSlice.actions

export default themeSlice.reducer