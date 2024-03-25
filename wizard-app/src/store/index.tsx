import { configureStore } from "@reduxjs/toolkit";
import { singersReducer } from "../features/singersSlice";
import { albumsReducer } from "../features/albumsSlice";

const store = configureStore({
  reducer: {
    singers: singersReducer,
    albums: albumsReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
