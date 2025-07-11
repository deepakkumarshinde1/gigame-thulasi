import { takeLatest } from "redux-saga/effects";
import { getProducts, getSingleProduct } from "../../products.slice";
import {
  getProductsHandler,
  getSingleProductHandler,
} from "../handler/products.handler";

export function* getProductsWatcher() {
  yield takeLatest(getProducts.type, getProductsHandler);
}

export function* getSingleProductWatcher() {
  yield takeLatest(getSingleProduct.type, getSingleProductHandler);
}
