import React, { useEffect } from "react";

import { Wallpaper, ImagesGrid } from "../../components";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import { getListOfRandomFlowers } from "../../state/flowers/actions";

export default () => {
  const dispatch = useAppDispatch();
  const flowers = useAppSelector((state) => state.flowersReducer.flowers);

  console.log(flowers);

  useEffect(() => {
    //dispatch(getListOfRandomFlowers());
  }, [dispatch]);

  return (
    <div>
      <Wallpaper />
      <ImagesGrid images={flowers} />
    </div>
  );
};
