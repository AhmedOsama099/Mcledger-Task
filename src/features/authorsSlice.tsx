import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { IResponseData } from "../types/generalModel";
import { IUIAuthors } from "../types/authorsModel";
import { handleGetAuthorsByIds } from "../services";

const initialState: IResponseData<IUIAuthors[]> = {
  data: [],
  error: "",
  prevData: [],
  selectedData: [],
};

// Create an async thunk to fetch data from the API
export const fetchAuthors = createAsyncThunk(
  "authorsSlice/fetchData",
  async (idsArr: string[], { rejectWithValue }) => {
    try {
      return (await handleGetAuthorsByIds(idsArr)) as IUIAuthors[];
    } catch (error: any) {
      // Handle errors
      return rejectWithValue({
        error: `Error fetching data: ${error.message}`,
      }); // Pass the error message as payload
    }
  }
);

// Create a Redux slice
const authorsSlice = createSlice({
  name: "authorsSlice",
  initialState,
  reducers: {
    handleAuthorsChange: (
      state,
      action: PayloadAction<{ id: string; value: boolean }>
    ) => {
      const { id, value } = action.payload;
      state.data = state.data.map((ele) => {
        if (ele.id === id) {
          return { ...ele, isSelected: !ele.isSelected };
        } else {
          return ele;
        }
      });
      state.selectedData =
        value === true
          ? [...state.selectedData, id]
          : state.selectedData.filter((authorId) => authorId !== id);
    },
    handlePreviousAuthorsData: (
      state,
      action: PayloadAction<{ value: string[] }>
    ) => {
      const { value } = action.payload;
      state.prevData = value;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAuthors.pending, (state) => {
        state.error = "";
      })
      .addCase(
        fetchAuthors.fulfilled,
        (state, action: PayloadAction<IUIAuthors[]>) => {
          state.data = action.payload;
          state.error = "";
          state.selectedData = [];
        }
      )
      .addCase(fetchAuthors.rejected, (state, action) => {
        state.error =
          (action.payload as { error: string }).error ?? "An error occurred";
      });
  },
});

// Export the action creators and reducer
export const { handleAuthorsChange, handlePreviousAuthorsData } =
  authorsSlice.actions;
export const authorsReducer = authorsSlice.reducer;
