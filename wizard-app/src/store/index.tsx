import { configureStore } from "@reduxjs/toolkit";
import { singersReducer } from "../features/singersSlice";
import { albumsReducer } from "../features/albumsSlice";
import { songsReducer } from "../features/songsSlice";
import { detailsReducer } from "../features/detailsSlice";

const store = configureStore({
  reducer: {
    singers: singersReducer,
    albums: albumsReducer,
    songs: songsReducer,
    details: detailsReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
