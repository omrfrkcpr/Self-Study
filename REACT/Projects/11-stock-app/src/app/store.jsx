import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
// import authMidReducer from "../features/authSliceMiddleware"; //!middleware ile olan kullanım
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, authReducer);

const store = configureStore({
  reducer: {
    auth: persistedReducer,
    // auth:authMidReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export let persistor = persistStore(store);

export default store;
