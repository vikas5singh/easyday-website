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

function* securityGuidanceSaga({ payload }) {
  try {
    const response = yield call(API.SECURITYGUIDANCE, payload);

    yield put(ACTION.securityGuidanceSuccess(response.data.data));
  } catch (error) {
    yield put(ACTION.securityGuidanceFail(error));
  }
}

function* SecurityGuidanceSaga() {
  yield takeEvery(CONST.SECURITYGUIDANCE, securityGuidanceSaga);
}

export default SecurityGuidanceSaga;
