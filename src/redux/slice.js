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
  isBtnLoadMoreHidden: false,
};

const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    changeList(state, { payload }) {
      state.cardsList = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAll.pending, handlePending)
      .addCase(getAll.rejected, handleRejected)
      .addCase(getAll.fulfilled, (state, { payload }) => {
        state.cardsList = [
          ...state.cardsList,
          ...payload.filter(
            (item) =>
              !state.cardsList.some(
                (existingItem) => existingItem.id === item.id
              )
          ),
        ];
        state.isLoading = false;
        if (payload.length < 3) {
          state.isBtnLoadMoreHidden = true;
        }
      })
      .addCase(updateById.pending, handlePending)
      .addCase(updateById.rejected, handleRejected)
      .addCase(updateById.fulfilled, (state, { payload }) => {
        state.isLoading = false;
      });
  },
});
export const { changeList } = cardsSlice.actions;
export const cardsReducer = cardsSlice.reducer;
