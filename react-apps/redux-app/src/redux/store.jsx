import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./counter.slice";
import ProductSlice from "./products.slice";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./saga/rootSaga";

let sagaMiddleware = createSagaMiddleware();
let store = configureStore({
  reducer: {
    myCounter: CounterSlice.reducer,
    myProducts: ProductSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
export default store;
