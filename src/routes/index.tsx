import React from "react";
import { Routes, Route } from "react-router-dom";

import { Home } from "../screens";

export default () => (
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
);
