import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.currentUser = payload;
    },
    logout: (state) => {
      state.currentUser = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
