import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
// import authMidReducer from "../features/authSliceMiddleware"; //!middleware ile olan kullanım

const store = configureStore({
  reducer: {
    auth: authReducer,
    // auth:authMidReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});
export default store;
