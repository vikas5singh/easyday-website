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

function* aboutUsSaga({ payload }) {
  try {
    const response = yield call(API.ABOUT, payload);

    yield put(ACTION.aboutUsSuccess(response.data.data));
  } catch (error) {
    yield put(ACTION.aboutUsFail(error));
  }
}

function* AboutUsSaga() {
  yield takeEvery(CONST.ABOUT, aboutUsSaga);
}

export default AboutUsSaga;
