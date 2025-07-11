import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
  name: "ProductSlice",
  initialState: {
    list: [],
  },
  reducers: {
    handelInput(state, action) {},
    getProducts() {},
    saveProducts(state, action) {
      state.list = action.payload;
    },
    getSingleProduct() {},
  },
});

export default ProductSlice;
export const { handelInput, getProducts, saveProducts, getSingleProduct } =
  ProductSlice.actions;
