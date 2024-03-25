import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IDetails } from "../types/generalModel";

const initialState: IDetails = {
  songsTotal: 0,
  amountTotal: 0,
};

// Create a Redux slice
const detailsSlice = createSlice({
  name: "detailsSlice",
  initialState,
  reducers: {
    handleDetailsValues: (state, action: PayloadAction<IDetails>) => {
      const { amountTotal, songsTotal } = action.payload;
      state.amountTotal = amountTotal;
      state.songsTotal = songsTotal;
    },
    handleResetDetailsValues: (state) => {
      state.amountTotal = 0;
      state.songsTotal = 0;
    },
  },
});

// Export the action creators and reducer
export const { handleDetailsValues, handleResetDetailsValues } =
  detailsSlice.actions;
export const detailsReducer = detailsSlice.reducer;
