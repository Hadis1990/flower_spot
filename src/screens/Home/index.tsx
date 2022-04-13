import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

import { Wallpaper, ImagesGrid } from "../../components";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import {
  getListOfRandomFlowers,
  getListOfSearchedFlowers,
} from "../../state/flowers/actions";

export default () => {
  const dispatch = useAppDispatch();
  const flowers = useAppSelector((state) => state.flowersReducer.flowers);
  const cacheFlowers = [...flowers];

  useEffect(() => {
    dispatch(getListOfRandomFlowers());
  }, [dispatch]);

  const searchFlowers = (query: string) => {
    dispatch(getListOfSearchedFlowers(query));
  };

  return (
    <div>
      <Wallpaper searchFlowers={searchFlowers} />
      <ImagesGrid images={flowers || cacheFlowers} />
      <Outlet />
    </div>
  );
};
