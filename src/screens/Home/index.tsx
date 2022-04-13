import { useEffect } from "react";
import { Outlet } from "react-router-dom";

import { Wallpaper, ImagesGrid, Loader } from "../../components";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import {
  getListOfRandomFlowers,
  getListOfSearchedFlowers,
} from "../../state/flowers/actions";

export default () => {
  const dispatch = useAppDispatch();
  const { flowers, loading } = useAppSelector((state) => state.flowersReducer);
  const cachedFlowers = [...flowers];

  useEffect(() => {
    dispatch(getListOfRandomFlowers());
  }, [dispatch]);

  const searchFlowers = (query: string) => {
    dispatch(getListOfSearchedFlowers(query));
  };

  return (
    <div>
      <Wallpaper searchFlowers={searchFlowers} />
      {loading ? (
        <Loader />
      ) : (
        <ImagesGrid images={flowers} cachedFlowers={cachedFlowers} />
      )}

      <Outlet />
    </div>
  );
};
