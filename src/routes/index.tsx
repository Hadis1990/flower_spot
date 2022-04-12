import { Routes, Route } from "react-router-dom";

import { Home } from "../screens";
import {
  Register,
  Login,
  Congratulations,
  UserProfile,
  ModalHOC,
} from "../components";

export default () => (
  <Routes>
    <Route path="/" element={<Home />}>
      <Route path="/register" element={<ModalHOC component={<Register />} />} />
      <Route path="/login" element={<ModalHOC component={<Login />} />} />
      <Route
        path="/congratulations"
        element={<ModalHOC component={<Congratulations />} />}
      />
      <Route
        path="/user_profile"
        element={<ModalHOC component={<UserProfile />} />}
      />
    </Route>
  </Routes>
);
