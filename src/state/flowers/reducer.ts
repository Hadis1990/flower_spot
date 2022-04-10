import { createSlice } from "@reduxjs/toolkit";

import { FlowerInitialState } from "../../types";
import { getListOfRandomFlowers } from "./actions";
import { flowersStateHandler } from "./util";

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
    builder.addCase(getListOfRandomFlowers.pending, (state) =>
      flowersStateHandler(state, { loading: false })
    );

    builder.addCase(getListOfRandomFlowers.fulfilled, (state, { payload }) =>
      flowersStateHandler(state, { flowers: payload })
    );

    builder.addCase(getListOfRandomFlowers.rejected, (state, { payload }) =>
      flowersStateHandler(state, { error: payload })
    );
  },
});

export default flowersReducer.reducer;
