import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "Dipanshu",
  password: "shazam",
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    addWelcome: (state, action) => {
      state.username = action.payload.username;
      state.password = action.payload.password;
    },
  },
});


export const { addWelcome } = loginSlice.actions;

export default loginSlice.reducer