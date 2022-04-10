import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useWindowWidth } from "../../util/hooks";

import navbarLogo from "../../assets/images/cherry-blossom.png";

import "./index.scss";

export default () => {
  const { windowWidth } = useWindowWidth();
  const [openMenu, setOpenMenu] = useState(windowWidth > 900);

  useEffect(() => {
    setOpenMenu(windowWidth > 900);
  }, [windowWidth]);

  return (
    <nav id="main-navbar" className="montserrat-font-family">
      <div className="section-1">
        <div>
          <img src={navbarLogo} className="logo" />
          <Link to="/home" className="pink-font">
            FlowrSpot
          </Link>
        </div>

        <div id="ham-menu" onClick={() => setOpenMenu((openMenu) => !openMenu)}>
          <div className={`${openMenu ? "close" : ""}`}></div>
          <div className={`${openMenu ? "close" : ""}`}></div>
          <div className={`${openMenu ? "close" : ""}`}></div>
        </div>
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
