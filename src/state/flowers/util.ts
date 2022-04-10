import { PayloadAction } from "@reduxjs/toolkit";

import { FlowerInitialState as FlowersState } from "../../types";

type Payload = {
  [P in keyof FlowersState]?: FlowersState[P];
};

export default {
  getRandomFlowersHandler: (state: FlowersState, payload: Payload) =>
    (state = { ...state, ...payload }),
};
