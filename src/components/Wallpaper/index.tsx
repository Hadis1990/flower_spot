import wallpaperImg from "../../assets/images/pl-herowallpaper.png";

import "./index.scss";

export default () => (
  <div
    style={{ backgroundImage: `url(${wallpaperImg})` }}
    id="wallpaper-container"
    className="montserrat-font-family"
  >
    <div>
      <h1 className="white-font">Discover flowers around you</h1>
      <h4 className="white-font">Explore between more than 8.427 sightings</h4>
    </div>
  </div>
);
