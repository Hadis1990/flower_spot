import { createAsyncThunk } from "@reduxjs/toolkit";

import usersApi from "../../services/api/users";

import { User } from "../../types";

export const registerUser = createAsyncThunk<
  string,
  User,
  { rejectValue: string }
>("users/registerUser", async (user: User, thunkApi) => {
  try {
    const response = await usersApi.registerUser(user);
    return response.data.auth_token;
  } catch (error: any) {
    return thunkApi.rejectWithValue(
      error?.response?.data?.error || "Something went wrong..."
    );
  }
});

export const loginUser = createAsyncThunk<
  string,
  Pick<User, "email" | "password">,
  { rejectValue: string }
>(
  "users/loginUser",
  async (user: Pick<User, "email" | "password">, thunkApi) => {
    try {
      const response = await usersApi.loginUser(user);
      return response.data.auth_token;
    } catch (error: any) {
      return thunkApi.rejectWithValue(
        error?.response?.data?.error || "Something went wrong..."
      );
    }
  }
);
