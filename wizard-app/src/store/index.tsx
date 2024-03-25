import { configureStore } from "@reduxjs/toolkit";
import { singersReducer } from "../features/singersSlice";
import { albumsReducer } from "../features/albumsSlice";
import { songsReducer } from "../features/songsSlice";

const store = configureStore({
  reducer: {
    singers: singersReducer,
    albums: albumsReducer,
    songs: songsReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
