import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../service/products.service";
const handleAsyncThunk = (
  builder,
  thunk,
  onFulfilled,
  onRejected,
  onPending = () => {}
) => {
  builder
    .addCase(thunk.pending, onPending)
    .addCase(thunk.fulfilled, onFulfilled)
    .addCase(thunk.rejected, onRejected);
};
const ProductSlice = createSlice({
  name: "ProductSlice",
  initialState: {
    list: [],
  },
  reducers: {
    handelInput(state, action) {},
  },
  extraReducers: (builder) => {
    handleAsyncThunk(
      builder,
      getProducts,
      (state, action) => {
        state.list = action.payload;
      },
      (state, action) => {
        state.list = [];
        alert("Something went wrong, try again");
      }
    );
  },
});

export default ProductSlice;
export const { handelInput } = ProductSlice.actions;
