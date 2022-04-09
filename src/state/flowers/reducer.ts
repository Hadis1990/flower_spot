import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Flower } from "../../types";

interface initialState {
  flowers: Flower[];
}

const initialState = {
  flowers: [],
};
