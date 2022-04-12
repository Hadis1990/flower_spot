import { useEffect } from "react";
import { Outlet } from "react-router-dom";

import { Wallpaper, ImagesGrid } from "../../components";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import { getListOfRandomFlowers } from "../../state/flowers/actions";

export default () => {
  const dispatch = useAppDispatch();
  const flowers = useAppSelector((state) => state.flowersReducer.flowers);

  useEffect(() => {
    dispatch(getListOfRandomFlowers());
  }, [dispatch]);

  return (
    <div>
      <Wallpaper />
      <ImagesGrid images={flowers} />
      <Outlet />
    </div>
  );
};
