import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import { errorMiddleware } from "./middleware/errorMiddleware";
import themeReducer from "../ui/theming/themingSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([errorMiddleware]),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
