import { createSlice } from "@reduxjs/toolkit";

import { UserInitialState } from "../../types";
import { registerUser, loginUser } from "./actions";
import reducerHandlers from "./util";

const initialState = {
  authToken: "",
  loading: false,
  error: "",
} as UserInitialState;

const usersReducer = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) => {
      reducerHandlers.authHandler(state, { loading: false });
      return state;
    });

    builder.addCase(registerUser.fulfilled, (state, { payload }) => {
      console.log("register service payload", payload);
      reducerHandlers.authHandler(state, { authToken: payload });
      return state;
    });

    builder.addCase(registerUser.rejected, (state, { payload }) => {
      console.log("rejected", payload);
      state = reducerHandlers.authHandler(state, { error: payload });
      console.log("state", state);
      return state;
    });

    builder.addCase(loginUser.pending, (state) => {
      reducerHandlers.authHandler(state, { loading: false });
      return state;
    });

    builder.addCase(loginUser.fulfilled, (state, { payload }) => {
      reducerHandlers.authHandler(state, { authToken: payload });
      return state;
    });

    builder.addCase(loginUser.rejected, (state, { payload }) => {
      reducerHandlers.authHandler(state, { error: payload });
      return state;
    });
  },
});

export default usersReducer.reducer;
