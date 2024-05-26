import { configureStore } from "@reduxjs/toolkit";
import { movieReducer } from "./Redux/MovieSlice";
export const store = configureStore({
  reducer: {
    movieReducer,
  },
});
