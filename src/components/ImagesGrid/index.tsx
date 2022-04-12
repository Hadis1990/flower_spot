import { Flower } from "../../types";

import { useAppSelector } from "../../state/hooks";

import "./index.scss";

type Props = {
  images: Flower[];
};

export default ({ images }: Props) => {
  const { authToken } = useAppSelector((state) => state.usersReducer.login);

  return (
    <div id="images-grid" className="ubuntu-font-family">
      {images.map((img) => (
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
  );
};
