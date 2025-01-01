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

function* benefitsSaga({ payload }) {
  try {
    const response = yield call(API.BENEFITS, payload);

    yield put(ACTION.benefitsSuccess(response.data.data));
  } catch (error) {
    yield put(ACTION.benefitsFail(error));
  }
}

function* BenefitsSaga() {
  yield takeEvery(CONST.BENEFITS, benefitsSaga);
}

export default BenefitsSaga;
