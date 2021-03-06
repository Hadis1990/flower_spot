import { createSlice } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";

import { setAuthToken, removeAuthToken, getAuthToken } from "../../util";
import { UserInitialState } from "../../types";
import { registerUser, loginUser } from "./actions";
import { authHandler } from "./util";

const initialState = {
  authToken: getAuthToken(),
  loading: false,
  error: "",
} as UserInitialState;

const registerReducer = createSlice({
  name: "registerUsers",
  initialState,
  reducers: {
    registerCleanUp: (state) =>
      authHandler(state, {
        loading: false,
        error: "",
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
      (state, { payload }) => (state = authHandler(state, { error: payload }))
    );
  },
});

const loginReducer = createSlice({
  name: "loginUsers",
  initialState,
  reducers: {
    loginCleanUp: (state) =>
      authHandler(state, {
        loading: false,
        error: "",
      }),

    logout: (state) => {
      state = authHandler(state, {
        authToken: "",
        loading: false,
        error: "",
      });
      removeAuthToken();
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) =>
      authHandler(state, { loading: false })
    );

    builder.addCase(loginUser.fulfilled, (state, { payload }) => {
      state = authHandler(state, { authToken: payload });
      setAuthToken(payload);
      return state;
    });

    builder.addCase(loginUser.rejected, (state, { payload }) =>
      authHandler(state, { error: payload })
    );
  },
});

const usersReducer = combineReducers({
  register: registerReducer.reducer,
  login: loginReducer.reducer,
});

export const { registerCleanUp } = registerReducer.actions;
export const { logout, loginCleanUp } = loginReducer.actions;

export default usersReducer;
