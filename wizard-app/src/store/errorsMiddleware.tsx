import type { Middleware } from "@reduxjs/toolkit";
import { handleSetError } from "../features/errorsSlice";

/**
 * Log a warning and show a toast!
 */
const errorMiddleware: Middleware = (storeAPI) => (next) => (action: any) => {
  // Check if the action is rejected and has an error payload
  if (action.type.endsWith("/rejected") && action.error) {
    // Dispatch a global error action with the error message

    storeAPI.dispatch(handleSetError(action.payload.error)); // Assuming action.error.message contains the error message
  }
  return next(action);
};

export default errorMiddleware;
