import logger from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";

import { singersReducer } from "../features/singersSlice";
import { albumsReducer } from "../features/albumsSlice";
import { songsReducer } from "../features/songsSlice";
import { detailsReducer } from "../features/detailsSlice";
import { personalDataReducer } from "../features/personalDataSlice";
import { errorsReducer } from "../features/errorsSlice";
import globalLoadingReducer from "../features/loadingSlice";
import errorMiddleware from "./errorsMiddleware";

const store = configureStore({
  reducer: {
    genres: singersReducer,
    authors: albumsReducer,
    songs: songsReducer,
    details: detailsReducer,
    personalDetails: personalDataReducer,
    loading: globalLoadingReducer,
    error: errorsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger).concat(errorMiddleware),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
