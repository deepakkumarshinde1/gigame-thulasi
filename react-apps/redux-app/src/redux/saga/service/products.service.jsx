import axios from "axios";
axios.defaults.baseURL = "https://fakestoreapi.com/";

export const getProductsService = () => {
  return axios.get("products");
};

export function getSingleProductService(id) {
  return axios.get("products/" + id);
}
