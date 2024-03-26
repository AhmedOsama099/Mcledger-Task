import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { handleGetAllSingers } from "../services";
import { IResponseData } from "../types/generalModel";
import { IUISingers } from "../types/singersModel";

const initialState: IResponseData<IUISingers[]> = {
  data: [],
  error: "",
  selectedData: [],
  prevData: [],
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
  reducers: {
    handleSingersChange: (
      state,
      action: PayloadAction<{ id: string; value: boolean }>
    ) => {
      const { id, value } = action.payload;

      state.data = state.data.map((ele) => {
        if (ele.id === id) {
          return { ...ele, isSelected: !ele.isSelected };
        } else {
          return { ...ele };
        }
      });

      state.selectedData =
        value === true
          ? [...state.selectedData, id]
          : state.selectedData.filter((singerId) => singerId !== id);
    },

    handlePreviousSingersData: (
      state,
      action: PayloadAction<{ value: string[] }>
    ) => {
      const { value } = action.payload;
      state.prevData = value;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSingers.pending, (state) => {
        state.error = "";
      })
      .addCase(
        fetchSingers.fulfilled,
        (state, action: PayloadAction<IUISingers[]>) => {
          state.data = action.payload;
          state.error = "";
        }
      )
      .addCase(fetchSingers.rejected, (state, action) => {
        state.error = action.error.message ?? "An error occurred";
      });
  },
});

// Export the action creators and reducer
export const { handleSingersChange, handlePreviousSingersData } =
  singersSlice.actions;
export const singersReducer = singersSlice.reducer;
