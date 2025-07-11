import { call, put } from "redux-saga/effects";
import {
  getProductsService,
  getSingleProductService,
} from "../service/products.service";
import { saveProducts } from "../../products.slice";

export function* getProductsHandler() {
  try {
    let { data } = yield call(getProductsService);
    console.log(data);
    yield put(saveProducts(data));
  } catch (error) {}
}

export function* getSingleProductHandler(action) {
  let { data } = yield call(getSingleProductService, action.payload);
  console.log(data);
}
