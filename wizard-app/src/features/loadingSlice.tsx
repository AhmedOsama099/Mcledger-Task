// Slice where the loading state is

import { Action, createSlice } from "@reduxjs/toolkit";
import { ILoading } from "../types/generalModel";

export const initialState: ILoading = {
  loading: false,
};

const globalLoadingSlice = createSlice({
  name: "globalLoading",
  initialState,
  extraReducers: (builder) => {
    builder
      .addMatcher(
        (action: Action) =>
          action.type.includes("/pending") && action.type.includes(":load"),
        (state) => {
          state.loading = true;
        }
      )
      .addMatcher(
        (action: Action) =>
          action.type.includes("/fulfilled") && action.type.includes(":load"),
        (state) => {
          state.loading = false;
        }
      )
      .addMatcher(
        (action: Action) =>
          action.type.includes("/rejected") && action.type.includes(":load"),
        (state) => {
          state.loading = false;
        }
      );
  },
  reducers: {},
});

export default globalLoadingSlice.reducer;

// https://greenydev.com/blog/global-loading-state-redux-toolkit/
