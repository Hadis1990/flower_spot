import React from "react";

import { Flower } from "../../types";

import "./index.scss";

type Props = {
  images: Flower[];
};

export default ({ images }: Props) => (
  <div id="images-grid">
    {images.map((img) => (
      <div
        className="img-container"
        style={{ backgroundImage: `url(${img.profile_picture})` }}
      >
        <div>
          <div>{img.name}</div>
          <div>{img.latin_name}</div>
          <div>{img.sightings}</div>
        </div>
      </div>
    ))}
  </div>
);
