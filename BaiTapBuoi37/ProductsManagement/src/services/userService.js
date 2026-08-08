import api from "./api";

export const userService = {
  getProducts: () => api.get("/products"),
};
