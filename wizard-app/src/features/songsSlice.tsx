import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { handleGetSongsByAlbumsIds } from "../services";
import { IResponseData } from "../types/generalModel";
import { IUISongsList } from "../types/songsModel";

const initialState: IResponseData<IUISongsList[]> = {
  data: [],
  error: "",
  selectedData: [],
  prevData: [],
};

// Create an async thunk to fetch data from the API
export const fetchSongs = createAsyncThunk(
  "songsSlice/fetchData",
  async (idsArr: string[], { rejectWithValue }) => {
    try {
      return (await handleGetSongsByAlbumsIds(idsArr)) as IUISongsList[];
    } catch (error: any) {
      // Handle errors
      return rejectWithValue({
        error: `Error fetching data: ${error.message}`,
      }); // Pass the error message as payload
    }
  }
);

// Create a Redux slice
const songsSlice = createSlice({
  name: "songsSlice",
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
        state.error = "";
      })
      .addCase(
        fetchSongs.fulfilled,
        (state, action: PayloadAction<IUISongsList[]>) => {
          state.data = action.payload;
          state.error = "";
          state.selectedData = [];
        }
      )
      .addCase(fetchSongs.rejected, (state, action) => {
        state.error =
          (action.payload as { error: string }).error ?? "An error occurred";
      });
  },
});

// Export the action creators and reducer
export const { handleSongsChange, handlePreviousSongsData } =
  songsSlice.actions;
export const songsReducer = songsSlice.reducer;
