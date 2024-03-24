import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { handleGetAllSingers } from "../services/singersServices";
import { IResponseData } from "../types/generalModel";
import { IUISingers } from "../types/singersModel";

const initialState: IResponseData<IUISingers[]> = {
  loading: false,
  data: [],
  error: "",
};

// Create an async thunk to fetch data from the API
export const fetchSingers = createAsyncThunk(
  "singersSlice/fetchData",
  async () => {
    return (await handleGetAllSingers()) as IUISingers[];
  }
);

// Create a Redux slice
const singersSlice = createSlice({
  name: "singersSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSingers.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(
        fetchSingers.fulfilled,
        (state, action: PayloadAction<IUISingers[]>) => {
          state.loading = false;
          state.data = action.payload;
          state.error = "";
        }
      )
      .addCase(fetchSingers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "An error occurred";
      });
  },
});

// Export the action creators and reducer
export const singersActions = singersSlice.actions;
export const singersReducer = singersSlice.reducer;
