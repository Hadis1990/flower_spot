import { Flower } from "../../../types";
import { apiFlowers } from "../config";

export default {
  getListOfRandomFlowers: () => apiFlowers({ url: "random" }),

  getListOfFlowers: () => apiFlowers({ url: "" }),

  getFlowerSightings: (id: number) => apiFlowers({ url: `/${id}/sightings` }),

  getFlowerDetail: (id: number) => apiFlowers({ url: `/${id}/` }),

  getListOfSearchedFlowers: (query: string) => {
    const params = new URLSearchParams();
    params.append("search", query);

    return apiFlowers({ url: "", params });
  },

  addFlower: (flower: Flower) =>
    apiFlowers({ url: "", method: "POST", data: flower }),
};
