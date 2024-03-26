import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPersonalDetails } from "../types/generalModel";

const initialState: IPersonalDetails = {
  name: "",
  email: "",
  mobile: "",
};

// Create a Redux slice
const personalDataSlice = createSlice({
  name: "personalDataSlice",
  initialState,
  reducers: {
    handlePersonalDetailsChange: (
      state,
      action: PayloadAction<{ name: string; value: any }>
    ) => {
      const { name, value } = action.payload;
      state[name as keyof typeof state] = value;
    },
  },
});

// Export the action creators and reducer
export const { handlePersonalDetailsChange } = personalDataSlice.actions;
export const personalDataReducer = personalDataSlice.reducer;
