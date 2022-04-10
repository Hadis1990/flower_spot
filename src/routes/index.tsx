import React from "react";
import { Routes, Route } from "react-router-dom";

import { Home } from "../screens";
import { Register, Login, ModalHOC } from "../components";

export default () => (
  <Routes>
    <Route path="/" element={<Home />}>
      <Route path="/register" element={<ModalHOC component={<Register />} />} />
      <Route path="/login" element={<ModalHOC component={<Login />} />} />
    </Route>
  </Routes>
);
