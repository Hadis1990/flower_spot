import wallpaperImg from "../../assets/images/pl-herowallpaper.png";

import "./index.scss";

type Props = {
  searchFlowers: (query: string) => void;
};

export default ({ searchFlowers }: Props) => {
  return (
    <div
      style={{ backgroundImage: `url(${wallpaperImg})` }}
      id="wallpaper-container"
      className="montserrat-font-family"
    >
      <div>
        <h1 className="white-font">Discover flowers around you</h1>
        <h4 className="white-font">
          Explore between more than 8.427 sightings
        </h4>
      </div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Looking for something specific?"
          onChange={(evt) => {
            if (evt.target.value.length >= 3) searchFlowers(evt.target.value);
          }}
        />
        <span>&#128269;</span>
      </div>
    </div>
  );
};
