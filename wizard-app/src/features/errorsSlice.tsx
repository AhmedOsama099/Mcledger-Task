import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IErrorHandle } from "../types/generalModel";

const initialState: IErrorHandle = {
  error: "",
};

// Create a Redux slice
const errorsSlice = createSlice({
  name: "errorsSlice",
  initialState,
  reducers: {
    handleSetError: (state, action: PayloadAction<any>) => {
      state.error = action.payload;
    },
    handleClearError: (state) => {
      state.error = "";
    },
  },
});

// Export the action creators and reducer
export const { handleSetError, handleClearError } = errorsSlice.actions;
export const errorsReducer = errorsSlice.reducer;
