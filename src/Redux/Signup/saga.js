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

function* signupUserSaga({ payload, callBack }) {
  try {
    const response = yield call(API.SIGNUP_USER, payload);
    if (response.data.status == "success") {
      toast.success(response.data.message);
      callBack && callBack(response.data.data);
    } else toast.error(response.data.message);

    yield put(ACTION.signupUserSuccess(response.data.data));
  } catch (error) {
    yield put(ACTION.signupUserFail(error));
  }
}

// ============ verify otp ============ //

function* verifyOTPSaga({ payload, callBack }) {
  try {
    const response = yield call(API.VERIFY_OTP, payload);
    if (response.data.status == "success") {
      toast.success(response.data.message);
      callBack && callBack(response.data.data);
    } else toast.error(response.data.message);

    yield put(ACTION.verifyOtpSuccess(response.data.data));
  } catch (error) {
    yield put(ACTION.verifyOtpFail(error));
  }
}

function* signupDriverSaga({ payload, callBack }) {
  try {
    const response = yield call(API.SIGNUP_DRIVER, payload);
    if (response.data.status == "success") {
      toast.success(response.data.message);
      callBack && callBack(response.data);
    } else toast.error(response.data.message);

    yield put(ACTION.signupDriverSuccess(response.data.data));
  } catch (error) {
    yield put(ACTION.signupDriverFail(error));
  }
}

function* SignupSaga() {
  yield takeEvery(CONST.SIGNUP_USER, signupUserSaga);
  yield takeEvery(CONST.VERIFY_OTP, verifyOTPSaga);
  yield takeEvery(CONST.SIGNUP_DRIVER, signupDriverSaga);
}

export default SignupSaga;
