import { all } from "redux-saga/effects";
import {
  getProductsWatcher,
  getSingleProductWatcher,
} from "./watcher/product.wacther";

export function* rootSaga() {
  let watchers = [getProductsWatcher(), getSingleProductWatcher()];
  yield all(watchers);
}
