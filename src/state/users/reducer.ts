import { createSlice } from "@reduxjs/toolkit";

import { UserInitialState } from "../../types";
import { registerUser, loginUser } from "./actions";
import { authHandler } from "./util";

const initialState = {
  authToken: "",
  loading: false,
  registerError: "",
  loginError: "",
} as UserInitialState;

const usersReducer = createSlice({
  name: "users",
  initialState,
  reducers: {
    cleanUp: (state) =>
      authHandler(state, {
        authToken: "",
        loading: false,
        registerError: "",
        loginError: "",
      }),
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) =>
      authHandler(state, { loading: false })
    );

    builder.addCase(registerUser.fulfilled, (state, { payload }) =>
      authHandler(state, { authToken: payload })
    );

    builder.addCase(
      registerUser.rejected,
      (state, { payload }) =>
        (state = authHandler(state, { registerError: payload }))
    );

    builder.addCase(loginUser.pending, (state) =>
      authHandler(state, { loading: false })
    );

    builder.addCase(loginUser.fulfilled, (state, { payload }) =>
      authHandler(state, { authToken: payload })
    );

    builder.addCase(loginUser.rejected, (state, { payload }) =>
      authHandler(state, { loginError: payload })
    );
  },
});

export const { cleanUp } = usersReducer.actions;

export default usersReducer.reducer;
