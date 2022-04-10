import axios from "axios";

export const apiUsers = axios.create({
  baseURL: "https://flowrspot-api.herokuapp.com/api/v1/users/",
});

export const apiFlowers = axios.create({
  baseURL: "https://flowrspot-api.herokuapp.com/api/v1/flowers/",
});
