import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.baseURL = "https://fakestoreapi.com/";

export const getProducts = createAsyncThunk("product/saveProduct", async () => {
  let { data } = await axios.get("products");
  return data;
});
