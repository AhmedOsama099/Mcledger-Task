// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { handleGetAllSingers } from "../services/SingersServices";

// interface IInitialState {
//     loading: false,
//     singers: [],
//     error: "",
// }
// const initialState = {
//   loading: false,
//   singers: [],
//   error: "",
// };

// // Create an async thunk to fetch data from the API
// export const fetchSingers = createAsyncThunk("singersSlice/fetchData", async () => {
//   return await handleGetAllSingers();
// });

// // Create a Redux slice
// const singersSlice = createSlice({
//   name: "singersSlice",
//   initialState,
//   reducers: {},
//   extraReducers: {
//     // Handle pending state while fetching data
//     [fetchData.pending]: (state) => {
//       state.loading = true;
//       state.error = null;
//     },
//     // Handle successful data fetching
//     [fetchData.fulfilled]: (state, action) => {
//       state.loading = false;
//       state.data = action.payload;
//     },
//     // Handle errors while fetching data
//     [fetchData.rejected]: (state, action) => {
//       state.loading = false;
//       state.error = action.error.message;
//     },
//   },
// });

// // Export the action creators and reducer
// export const cakeActions = singersSlice.actions;
// export const cakeReducer = singersSlice.reducer;
