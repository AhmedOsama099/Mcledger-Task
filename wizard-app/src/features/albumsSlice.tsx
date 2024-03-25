import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { IResponseData } from "../types/generalModel";
import { IUIAlbums } from "../types/albumsModel";
import { handleGetAlbumsByIds } from "../services/singersServices";

const initialState: IResponseData<IUIAlbums[]> = {
  loading: false,
  data: [],
  error: "",
  selectedData: [],
};

// Create an async thunk to fetch data from the API
export const fetchAlbums = createAsyncThunk(
  "albumsSlice/fetchData",
  async (idsArr: string[]) => {
    return (await handleGetAlbumsByIds(idsArr)) as IUIAlbums[];
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
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAlbums.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(
        fetchAlbums.fulfilled,
        (state, action: PayloadAction<IUIAlbums[]>) => {
          state.loading = false;
          state.data = action.payload;
          state.error = "";
        }
      )
      .addCase(fetchAlbums.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "An error occurred";
      });
  },
});

// Export the action creators and reducer
export const { handleAlbumsChange } = albumsSlice.actions;
export const albumsReducer = albumsSlice.reducer;
