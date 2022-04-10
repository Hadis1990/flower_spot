import { Flower } from "../../../types";
import { apiFlowers } from "../config";

export default {
  getListOfRandomFlowers: () => apiFlowers({ url: "random" }),

  getListOfFlowers: () => apiFlowers({ url: "" }),

  getFlowerSightings: (id: number) => apiFlowers({ url: `/${id}/sightings` }),

  getFlowerDetail: (id: number) => apiFlowers({ url: `/${id}/` }),

  getFlowersSearch: (query: string) => {
    const params = new URLSearchParams();
    params.append("query", query);

    return apiFlowers({ url: "search", params });
  },

  addFlower: (flower: Flower) =>
    apiFlowers({ url: "", method: "POST", data: flower }),
};
