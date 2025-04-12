import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { handleGetAllGenres } from "../services";
import { IResponseData } from "../types/generalModel";
import { IUIGenres } from "../types/genresModel";

const initialState: IResponseData<IUIGenres[]> = {
  data: [],
  error: "",
  selectedData: [],
  prevData: [],
};

// Create an async thunk to fetch data from the API
export const fetchGenres = createAsyncThunk(
  "genresSlice/fetchData",
  async (_, { rejectWithValue }) => {
    try {
      const data = await handleGetAllGenres();
      return data as IUIGenres[];
    } catch (error: any) {
      // Handle errors
      return rejectWithValue({
        error: `Error fetching data: ${error.message}`,
      }); // Pass the error message as payload
    }
  }
);

// Create a Redux slice
const genresSlice = createSlice({
  name: "genresSlice",
  initialState,
  reducers: {
    handleGenresChange: (
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
          : state.selectedData.filter((genreId) => genreId !== id);
    },

    handlePreviousGenresData: (
      state,
      action: PayloadAction<{ value: string[] }>
    ) => {
      const { value } = action.payload;
      state.prevData = value;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGenres.pending, (state) => {
        state.error = "";
      })
      .addCase(
        fetchGenres.fulfilled,
        (state, action: PayloadAction<IUIGenres[]>) => {
          state.data = action.payload;
          state.error = "";
        }
      )
      .addCase(fetchGenres.rejected, (state, action) => {
        state.error =
          (action.payload as { error: string }).error ?? "An error occurred";
      });
  },
});

// Export the action creators and reducer
export const { handleGenresChange, handlePreviousGenresData } =
  genresSlice.actions;
export const genresReducer = genresSlice.reducer;
