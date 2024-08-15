import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./feature/authSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  devTools: true,
});

export default store;
