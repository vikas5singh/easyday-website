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

function* privacySaga({ payload }) {
  try {
    const response = yield call(API.PRIVACY_POLICY, payload);

    yield put(ACTION.privacyPolicySuccess(response.data.data));
  } catch (error) {
    yield put(ACTION.privacyPolicyFail(error));
  }
}

function* PrivacyPolicySaga() {
  yield takeEvery(CONST.PRIVACY_POLICY, privacySaga);
}

export default PrivacyPolicySaga;
