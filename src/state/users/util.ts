import { UserInitialState as UserState } from "../../types";

type Payload = {
  [P in keyof UserState]?: UserState[P];
};

export default {
  authHandler: (state: UserState, payload: Payload) =>
    (state = { ...state, ...payload }),
};
