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

function* contactUsSaga({ payload }) {
  try {
    const response = yield call(API.CONTACTUS, payload);

    yield put(ACTION.contactUsSuccess(response.data.data));
  } catch (error) {
    yield put(ACTION.contactUsFail(error));
  }
}

function* ContactUsSaga() {
  yield takeEvery(CONST.CONTACTUS, contactUsSaga);
}

export default ContactUsSaga;
