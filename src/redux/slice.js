import { createSlice } from "@reduxjs/toolkit";
import { getAll, updateById } from "./operation";

const handlePending = (state) => {
  state.isLoading = true;
};
const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const initialState = {
  cardsList: [],
  isLoading: false,
  error: null,
};

const cardsSlice = createSlice({
  name: "cards",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAll.pending, handlePending)
      .addCase(getAll.rejected, handleRejected)
      .addCase(getAll.fulfilled, (state, { payload }) => {
        state.cardsList = payload;
        state.isLoading = false;
      })
      .addCase(updateById.pending, handlePending)
      .addCase(updateById.rejected, handleRejected)
      .addCase(updateById.fulfilled, (state, { payload }) => {
        state.isLoading = false;
      });
  },
});

export const cardsReducer = cardsSlice.reducer;
