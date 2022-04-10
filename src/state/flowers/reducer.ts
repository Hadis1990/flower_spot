import { createSlice } from "@reduxjs/toolkit";

import { FlowerInitialState } from "../../types";
import { getListOfRandomFlowers } from "./actions";
import reducerHandlers from "./util";

const initialState = {
  flowers: [],
  loading: false,
  error: "",
} as FlowerInitialState;

const flowersReducer = createSlice({
  name: "flowers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getListOfRandomFlowers.pending, (state) => {
      reducerHandlers.getRandomFlowersHandler(state, { loading: false });
      return state;
    });

    builder.addCase(getListOfRandomFlowers.fulfilled, (state, { payload }) => {
      reducerHandlers.getRandomFlowersHandler(state, { flowers: payload });
      return state;
    });

    builder.addCase(getListOfRandomFlowers.rejected, (state, { payload }) => {
      reducerHandlers.getRandomFlowersHandler(state, { error: payload });
      return state;
    });
  },
});

export default flowersReducer.reducer;
