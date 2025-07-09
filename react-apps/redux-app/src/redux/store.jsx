import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./counter.slice";
import ProductSlice from "./products.slice";

let store = configureStore({
  reducer: {
    myCounter: CounterSlice.reducer,
    myProducts: ProductSlice.reducer,
  },
});

export default store;
