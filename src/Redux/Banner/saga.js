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

function* getBannerSaga({ payload }) {
  try {
    const response = yield call(API.BANNER_LIST, payload);
    if (response.data.status == "success") {
    } else toast.error(response.data.message);

    yield put(ACTION.getBannerSuccess(response.data.data));
  } catch (error) {
    yield put(ACTION.getBannerFail(error));
  }
}

function* BannerSaga() {
  yield takeEvery(CONST.GET_BANNER, getBannerSaga);
}

export default BannerSaga;
