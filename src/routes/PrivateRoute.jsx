import { Navigate, Outlet } from "react-router-dom";
import { isUserLoggedIn } from "../util";

export default () => {
  const loggedIn = isUserLoggedIn();
  return loggedIn ? <Outlet /> : <Navigate to="/login" />;
};
