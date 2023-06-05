import { configureStore } from "@reduxjs/toolkit";
import { cardsReducer } from "./slice";

export const store = configureStore({
  reducer: {
    cards: cardsReducer,
  },
});
