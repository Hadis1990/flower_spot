import { createAsyncThunk } from "@reduxjs/toolkit";

import flowersApi from "../../services/api/flowers";

import { Flower } from "../../types";

export const getListOfRandomFlowers = createAsyncThunk<
  Flower[],
  void,
  { rejectValue: string }
>("flowers/getListOfRandomFlowers", async (_, thunkApi) => {
  try {
    const response = await flowersApi.getListOfRandomFlowers();
    return response.data.flowers;
  } catch (error: any) {
    return thunkApi.rejectWithValue(
      error?.response?.data?.error || "Something went wrong..."
    );
  }
});

export const getListOfSearchedFlowers = createAsyncThunk<
  Flower[],
  string,
  { rejectValue: string }
>("flowers/getListOfSearchedFlowers", async (query, thunkApi) => {
  try {
    const response = await flowersApi.getListOfSearchedFlowers(query);
    console.log(response);
    return response.data.flowers;
  } catch (error: any) {
    return thunkApi.rejectWithValue(
      error?.response?.data?.error || "Something went wrong..."
    );
  }
});
