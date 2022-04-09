import React from "react";
import { Link } from "react-router-dom";

import navbarLogo from "../../assets/images/cherry-blossom.png";

import "./index.scss";

export default () => (
  <nav id="main-navbar">
    <div className="section-1">
      <img src={navbarLogo} className="logo" />
      <Link to="/home" className="pink-font">
        FlowrSpot
      </Link>
    </div>

    <div className="section-2">
      <Link to="/home" className="gray-font">
        Flowers
      </Link>
      <Link to="/latest_sightings" className="gray-font">
        Latest Sightings
      </Link>
      <Link to="/favorites" className="gray-font">
        Favorites
      </Link>
      <Link to="/login" className="pink-font">
        Login
      </Link>
      <Link to="/register" className="white-font">
        New Account
      </Link>
    </div>
  </nav>
);
