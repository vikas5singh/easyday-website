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

function* termConditionSaga({ payload }) {
  try {
    const response = yield call(API.TERMCONDITION, payload);

    yield put(ACTION.termConditionSuccess(response.data.data));
  } catch (error) {
    yield put(ACTION.termConditionFail(error));
  }
}

function* TermConditionSaga() {
  yield takeEvery(CONST.TERMCONDITION, termConditionSaga);
}

export default TermConditionSaga;
