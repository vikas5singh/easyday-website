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

function* refundPolicySaga({ payload }) {
  try {
    const response = yield call(API.REFUNDPOLICY, payload);

    yield put(ACTION.refundPolicySuccess(response.data.data));
  } catch (error) {
    yield put(ACTION.refundPolicyFail(error));
  }
}

function* RefundPolicySaga() {
  yield takeEvery(CONST.REFUNDPOLICY, refundPolicySaga);
}

export default RefundPolicySaga;
