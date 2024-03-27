import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { IResponseData } from "../types/generalModel";
import { IUIAlbums } from "../types/albumsModel";
import { handleGetAlbumsByIds } from "../services";

const initialState: IResponseData<IUIAlbums[]> = {
  data: [],
  error: "",
  prevData: [],
  selectedData: [],
};

// Create an async thunk to fetch data from the API
export const fetchAlbums = createAsyncThunk(
  "albumsSlice/fetchData",
  async (idsArr: string[], { rejectWithValue }) => {
    try {
      return (await handleGetAlbumsByIds(idsArr)) as IUIAlbums[];
    } catch (error: any) {
      // Handle errors
      return rejectWithValue({
        error: `Error fetching data: ${error.message}`,
      }); // Pass the error message as payload
    }
  }
);

// Create a Redux slice
const albumsSlice = createSlice({
  name: "albumsSlice",
  initialState,
  reducers: {
    handleAlbumsChange: (
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
    handlePreviousAlbumsData: (
      state,
      action: PayloadAction<{ value: string[] }>
    ) => {
      const { value } = action.payload;
      state.prevData = value;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAlbums.pending, (state) => {
        state.error = "";
      })
      .addCase(
        fetchAlbums.fulfilled,
        (state, action: PayloadAction<IUIAlbums[]>) => {
          state.data = action.payload;
          state.error = "";
          state.selectedData = [];
        }
      )
      .addCase(fetchAlbums.rejected, (state, action) => {
        state.error =
          (action.payload as { error: string }).error ?? "An error occurred";
      });
  },
});

// Export the action creators and reducer
export const { handleAlbumsChange, handlePreviousAlbumsData } =
  albumsSlice.actions;
export const albumsReducer = albumsSlice.reducer;
