import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { handleGetSongsByAlbumsIds } from "../services";
import { IResponseData } from "../types/generalModel";
import { IUISongs } from "../types/songsModel";

const initialState: IResponseData<IUISongs[]> = {
  loading: false,
  data: [],
  error: "",
  selectedData: [],
  prevData: [],
};

// Create an async thunk to fetch data from the API
export const fetchSongs = createAsyncThunk(
  "singersSlice/fetchData",
  async (idsArr: string[]) => {
    return (await handleGetSongsByAlbumsIds(idsArr)) as IUISongs[];
  }
);

// Create a Redux slice
const songssSlice = createSlice({
  name: "songssSlice",
  initialState,
  reducers: {
    handleSongsChange: (
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
          : state.selectedData.filter((albumId) => albumId !== id);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSongs.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(
        fetchSongs.fulfilled,
        (state, action: PayloadAction<IUISongs[]>) => {
          state.loading = false;
          state.data = action.payload;
          state.error = "";
        }
      )
      .addCase(fetchSongs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "An error occurred";
      });
  },
});

// Export the action creators and reducer
//   export const { handleAlbumsChange } = songssSlice.actions;
export const songsReducer = songssSlice.reducer;
