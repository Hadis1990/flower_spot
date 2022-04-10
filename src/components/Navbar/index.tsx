import React, { useState } from "react";
import { Link } from "react-router-dom";

import navbarLogo from "../../assets/images/cherry-blossom.png";

import "./index.scss";

export default () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav id="main-navbar" className="montserrat-font-family">
      <div className="section-1">
        <img src={navbarLogo} className="logo" />
        <Link to="/home" className="pink-font">
          FlowrSpot
        </Link>
      </div>

      <div id="ham-menu" onClick={() => setOpenMenu((openMenu) => !openMenu)}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {openMenu && (
        <div className="section-2">
          <Link to="/home" className="gray-font navbar-item">
            Flowers
          </Link>
          <Link to="/latest_sightings" className="gray-font navbar-item">
            Latest Sightings
          </Link>
          <Link to="/favorites" className="gray-font navbar-item">
            Favorites
          </Link>
          <Link to="/login" className="pink-font navbar-item">
            Login
          </Link>
          <Link to="/register" className="white-font navbar-item">
            New Account
          </Link>
        </div>
      )}
    </nav>
  );
};
