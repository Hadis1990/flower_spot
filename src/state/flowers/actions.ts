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
  } catch (error) {
    return thunkApi.rejectWithValue("Could not load images...");
  }
});
