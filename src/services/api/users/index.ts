import { User } from "../../../types";
import { apiUsers } from "../config";

export default {
  registerUser: (user: User) =>
    apiUsers({ url: "register", method: "POST", data: user }),

  loginUser: (user: Pick<User, "email" | "password">) =>
    apiUsers({ url: "login", method: "POST", data: user }),

  getUserDate: (id: number) =>
    apiUsers({
      url: `${id}`,
      data: { auth_token: localStorage.getItem("authToken") },
    }),
};
