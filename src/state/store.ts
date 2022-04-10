import { configureStore } from "@reduxjs/toolkit";

import flowersReducer from "./flowers/reducer";
import usersReducer from "./users/reducer";

export const store = configureStore({
  reducer: {
    flowersReducer,
    usersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
