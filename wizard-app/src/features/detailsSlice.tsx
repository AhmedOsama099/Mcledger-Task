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
    handleDetailsTotal: (state, action: PayloadAction<IDetails>) => {
      const { amountTotal, songsTotal } = action.payload;
      state.amountTotal = amountTotal;
      state.songsTotal = songsTotal;
    },
  },
});

// Export the action creators and reducer
export const { handleDetailsTotal } = detailsSlice.actions;
export const detailsReducer = detailsSlice.reducer;
