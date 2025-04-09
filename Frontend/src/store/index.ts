import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../store/auth/authSlice";
import dataSlice from "../store/data/dataSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    data: dataSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
