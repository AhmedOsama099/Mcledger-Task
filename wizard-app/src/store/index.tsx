import logger from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";

import { singersReducer } from "../features/singersSlice";
import { albumsReducer } from "../features/albumsSlice";
import { songsReducer } from "../features/songsSlice";
import { detailsReducer } from "../features/detailsSlice";
import { personalDataReducer } from "../features/personalDataSlice";
import globalLoadingSlice from "../features/loadingSlice";

const store = configureStore({
  reducer: {
    singers: singersReducer,
    albums: albumsReducer,
    songs: songsReducer,
    details: detailsReducer,
    personalDetails: personalDataReducer,
    loading: globalLoadingSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
