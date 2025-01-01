import {
  put,
  call,
  take,
  every,
  takeLatest,
  takeEvery,
} from "redux-saga/effects";
import * as CONST from "./constant";
import * as ACTION from "./action";
import * as API from "../../services/ApiCalls";
import { toast } from "react-toastify";

function* nearbyRestaurantSaga({ payload, callBack }) {
  try {
    const response = yield call(API.NEARBY_RESTAURANT, payload);
    if (response.data.status == "success") {
      // toast.success(response.data.message);
      // callBack && callBack(response.data);
    }

    yield put(ACTION.nearbyRestaurantSuccess(response.data));
  } catch (error) {
    yield put(ACTION.nearbyRestaurantFail(error));
  }
}
function* collectionTabSaga({ payload, callBack }) {
  try {
    const response = yield call(API.COLLECTION_TAB, payload);
    if (response.data.status == "success") {
      // toast.success(response.data.message);
      // callBack && callBack(response.data);
    }

    yield put(ACTION.collectionTabSuccess(response.data));
  } catch (error) {
    yield put(ACTION.collectionTabFail(error));
  }
}

function* restaurantDetailSaga({ payload, callBack }) {
  // console.log(payload, "payloadpayloadpayload")
  try {
    const response = yield call(API.RESTAURANT_DETAIL, payload);

    // console.log(response, "RESPONSe")
    yield put(ACTION.restaurantDetailSuccess(response.data.data));
  } catch (error) {
    yield put(ACTION.restaurantDetailFail(error));
  }
}

function* freshMarketDetailSaga({ payload, callBack }) {
  // console.log(payload, "payloadpayloadpayload")
  try {
    const response = yield call(API.FRESH_MARKET_DETAIL, payload);

    // console.log(response, "RESPONSe")
    yield put(ACTION.freshMarkettDetailSuccess(response.data.data));
  } catch (error) {
    yield put(ACTION.freshMarkettDetailFail(error));
  }
}

function* getProductSaga({ payload, callBack }) {
  // console.log(payload, "payloadpayloadpayload")
  try {
    const response = yield call(API.GET_PRODUCT, payload);
    if (response.data.status == "success") {
      // toast.success(response.data.message);
      callBack && callBack(response.data);
    }
    // console.log(response, "RESPONSe")
    yield put(ACTION.getProductSuccess(response.data.data));
  } catch (error) {
    yield put(ACTION.getProductFail(error));
  }
}

function* getHomeSaga({ payload, callBack }) {
  // console.log(payload, "payloadpayloadpayload")
  try {
    const response = yield call(API.GET_HOME, payload);

    // console.log(response, "RESPONSe")
    yield put(ACTION.getHomeDataSuccess(response.data.data));
  } catch (error) {
    yield put(ACTION.getHomeDataFail(error));
  }
}

function* getHomePageSaga({ payload, callBack }) {
  // console.log(payload, "payloadpayloadpayload")
  try {
    const response = yield call(API.GET_HOME_PAGE, payload);

    // console.log(response, "RESPONSe")
    yield put(ACTION.getHomePageSuccess(response.data.data));
  } catch (error) {
    yield put(ACTION.getHomePageFail(error));
  }
}

function* getProductDetailsSaga({ payload, callBack }) {
  try {
    const response = yield call(API.PRODUCT_DETAILS, payload?._id);
    if (response.data.status == "success") {
      callBack && callBack(response.data);
    }
    // console.log(response, "RESPONSe")
    yield put(ACTION.getProductDetailsSuccess(response.data.data));
  } catch (error) {
    yield put(ACTION.getProductDetailsFail(error));
  }
}

function* NearbyRestaurantSaga() {
  yield takeEvery(CONST.NEARBY_RESTAURANT, nearbyRestaurantSaga);
  yield takeEvery(CONST.RESTAURANT_DETAIL, restaurantDetailSaga);
  yield takeEvery(CONST.FRESH_MARKET_DETAIL, freshMarketDetailSaga);
  yield takeEvery(CONST.COLLECTION_TAB, collectionTabSaga);
  yield takeEvery(CONST.GET_PRODUCT, getProductSaga)
  yield takeEvery(CONST.GET_HOME, getHomeSaga)
  yield takeEvery(CONST.GET_HOME_PAGE, getHomePageSaga)
  yield takeEvery(CONST.PRODUCT_DETAILS, getProductDetailsSaga)
}

export default NearbyRestaurantSaga;
