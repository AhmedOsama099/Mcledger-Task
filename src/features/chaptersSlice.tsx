import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { handleGetChaptersByAuthorsIds } from "../services";
import { IResponseData } from "../types/generalModel";
import { IUIChaptersList } from "../types/chaptersModel";

const initialState: IResponseData<IUIChaptersList[]> = {
  data: [],
  error: "",
  selectedData: [],
  prevData: [],
};

// Create an async thunk to fetch data from the API
export const fetchChapters = createAsyncThunk(
  "chaptersSlice/fetchData",
  async (idsArr: string[], { rejectWithValue }) => {
    try {
      return (await handleGetChaptersByAuthorsIds(idsArr)) as IUIChaptersList[];
    } catch (error: any) {
      // Handle errors
      return rejectWithValue({
        error: `Error fetching data: ${error.message}`,
      }); // Pass the error message as payload
    }
  }
);

// Create a Redux slice
const chaptersSlice = createSlice({
  name: "chaptersSlice",
  initialState,
  reducers: {
    handleChaptersChange: (
      state,
      action: PayloadAction<{ id: string; value: boolean }>
    ) => {
      const { id, value } = action.payload;
      state.data.forEach((ele) => {
        if (ele.data.some((chapter) => chapter.id === id)) {
          ele.data = ele.data.map((chapter) => {
            if (chapter.id === id) {
              return { ...chapter, isSelected: !chapter.isSelected };
            }
            return chapter;
          });
        }
      });

      state.selectedData =
        value === true
          ? [...state.selectedData, id]
          : state.selectedData.filter((chapterId) => chapterId !== id);
    },
    handlePreviousChaptersData: (
      state,
      action: PayloadAction<{ value: string[] }>
    ) => {
      const { value } = action.payload;
      state.prevData = value;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchChapters.pending, (state) => {
        state.error = "";
      })
      .addCase(
        fetchChapters.fulfilled,
        (state, action: PayloadAction<IUIChaptersList[]>) => {
          state.data = action.payload;
          state.error = "";
          state.selectedData = [];
        }
      )
      .addCase(fetchChapters.rejected, (state, action) => {
        state.error =
          (action.payload as { error: string }).error ?? "An error occurred";
      });
  },
});

// Export the action creators and reducer
export const { handleChaptersChange, handlePreviousChaptersData } =
  chaptersSlice.actions;
export const chaptersReducer = chaptersSlice.reducer;
