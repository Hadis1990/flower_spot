import { Flower } from "../../types";

import { useAppSelector } from "../../state/hooks";

import "./index.scss";

type Props = {
  images: Flower[];
  cachedFlowers: Flower[];
  columns: number;
};

export default ({ images, cachedFlowers, columns }: Props) => {
  const { authToken } = useAppSelector((state) => state.usersReducer.login);

  const imagesToDisplay = images.length ? images : cachedFlowers;

  return (
    <div id="images-grid-container">
      <div className={`images-grid repeat-columns-${columns}`}>
        {!images.length && <h3>No images Found...</h3>}
        {imagesToDisplay.map((img) => (
          <div
            className="img-container"
            style={{ backgroundImage: `url(${img.profile_picture})` }}
            key={img.id}
          >
            {authToken && <div className="favorite-flower">&#9734;</div>}

            <div className="img-info">
              <div>{img.name}</div>
              <div>{img.latin_name}</div>
              <div className="img-sightings">{img.sightings}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
