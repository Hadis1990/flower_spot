import React from "react";
import { Routes, Route } from "react-router-dom";

import { Home } from "../screens";
import {
  Register,
  Login,
  Congratulations,
  UserProfile,
  ModalHOC,
} from "../components";
import PrivateRoute from "./PrivateRoute";

export default () => (
  <Routes>
    <Route path="/" element={<Home />}>
      <Route path="/register" element={<ModalHOC component={<Register />} />} />
      <Route path="/login" element={<ModalHOC component={<Login />} />} />
      <Route
        path="/congratulations"
        element={<ModalHOC component={<Congratulations />} />}
      />
    </Route>

    <Route path="/user_profile" element={<PrivateRoute />}>
      <Route path="/user_profile" element={<UserProfile />} />
    </Route>
  </Routes>
);
