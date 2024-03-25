import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { handleGetSongsByAlbumsIds } from "../services";
import { IResponseData } from "../types/generalModel";
import { IUISongsList } from "../types/songsModel";

const initialState: IResponseData<IUISongsList[]> = {
  loading: false,
  data: [],
  error: "",
  selectedData: [],
  prevData: [],
};

// Create an async thunk to fetch data from the API
export const fetchSongs = createAsyncThunk(
  "songssSlice/fetchData",
  async (idsArr: string[]) => {
    return (await handleGetSongsByAlbumsIds(idsArr)) as IUISongsList[];
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
      state.data.forEach((ele) => {
        if (ele.data.some((song) => song.id === id)) {
          ele.data = ele.data.map((song) => {
            if (song.id === id) {
              return { ...song, isSelected: !song.isSelected };
            }
            return song;
          });
        }
      });

      state.selectedData =
        value === true
          ? [...state.selectedData, id]
          : state.selectedData.filter((songId) => songId !== id);
    },
    handlePreviousSongsData: (
      state,
      action: PayloadAction<{ value: string[] }>
    ) => {
      const { value } = action.payload;
      state.prevData = value;
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
        (state, action: PayloadAction<IUISongsList[]>) => {
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
export const { handleSongsChange, handlePreviousSongsData } =
  songssSlice.actions;
export const songsReducer = songssSlice.reducer;
