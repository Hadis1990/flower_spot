import { Flower } from "../../../types";
import { apiFlowers } from "../config";

export const getListOfRandomFlowers = () =>
  apiFlowers({ url: "random" }).then((res) => console.log(res));

export const getListOfFlowers = () =>
  apiFlowers({ url: "" }).then((res) => console.log(res));

export const getFlowerSightings = (id: number) =>
  apiFlowers({ url: `/${id}/sightings` }).then((res) => console.log(res));

export const getFlowerDetail = (id: number) =>
  apiFlowers({ url: `/${id}/` }).then((res) => console.log(res));

export const getFlowersSearch = (query: string) => {
  const params = new URLSearchParams();
  params.append("query", query);

  return apiFlowers({ url: "search", params });
};

export const addFlower = (flower: Flower) =>
  apiFlowers({ url: "", method: "POST", data: flower });
