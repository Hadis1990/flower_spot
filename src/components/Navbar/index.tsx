import React from "react";
import { Link } from "react-router-dom";

import "./index.scss";

export default () => (
  <nav id="main-navbar">
    <div className="section-1">
      <Link to="/home">FlowrSpot</Link>
    </div>

    <div className="section-2">
      <Link to="/home">Flowers</Link>
      <Link to="/latest_sightings">Latest Sightings</Link>
      <Link to="/favorites">Favorites</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">New Account</Link>
    </div>
  </nav>
);
