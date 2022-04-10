import { UserInitialState as UserState } from "../../types";

type Payload = {
  [P in keyof UserState]?: UserState[P];
};

export const authHandler = (state: UserState, payload: Payload) => {
  state = { ...state, ...payload };
  return state;
};
