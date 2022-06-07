import { configureStore } from "@reduxjs/toolkit";
import updateReducer from "../reduxStore/createSlice";
import userReducer from "../reduxStore/createSliceUser";
export const store = configureStore({
  reducer: {
    update: updateReducer,
    user: userReducer,
  },
});
