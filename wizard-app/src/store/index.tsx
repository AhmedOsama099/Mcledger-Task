import { configureStore } from "@reduxjs/toolkit";
import { singersReducer } from "../features/singersSlice";

const store = configureStore({
  reducer: {
    singers: singersReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
