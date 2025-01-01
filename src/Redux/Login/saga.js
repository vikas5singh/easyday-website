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

function* loginUserSaga({ payload, callBack }) {
  try {
    const response = yield call(API.LOGIN_USER, payload);
    if (response.data.status == "success") {
      toast.success(response.data.message);
      callBack && callBack();
    } else toast.error(response.data.message);

    localStorage.setItem("authToken", response.data.data.token);
    localStorage.setItem("userId", response.data.data._id);

    yield put(ACTION.loginUserSuccess(response.data.data));
  } catch (error) {
    yield put(ACTION.loginUserFail(error));
  }
}

// ========== forgot pass ======== //

function* forgotpassSaga({ payload, callBack }) {
  try {
    const response = yield call(API.FORGOT_PASS, payload);
    if (response.data.status == "success") {
      toast.success(response.data.message);
      callBack && callBack(response.data.data);
    } else toast.error(response.data.message);

    yield put(ACTION.forgotPassSuccess(response.data.data));
  } catch (error) {
    yield put(ACTION.forgotPassFail(error));
  }
}

// ========== reset pass ======== //

function* resetpassSaga({ payload, callBack }) {
  try {
    const response = yield call(API.RESET_PASS, payload);
    if (response.data.status == "success") {
      toast.success(response.data.message);
      callBack && callBack(response.data.data);
    } else toast.error(response.data.message);
    yield put(ACTION.resetPassSuccess(response.data.data));
  } catch (error) {
    yield put(ACTION.resetPassFail(error));
  }
}

function* changepassSaga({ payload, callBack }) {
  try {
    const response = yield call(API.CHANGE_PASSWORD, payload);
    if (response.data.status == "success") {
      toast.success(response.data.message);
      callBack && callBack(response.data.data);
    } else toast.error(response.data.message);
    yield put(ACTION.changePassSuccess(response.data.data));
  } catch (error) {
    yield put(ACTION.changePassFail(error));
  }
}


function* LoginSaga() {
  yield takeEvery(CONST.LOGIN_USER, loginUserSaga);
  yield takeEvery(CONST.FORGOT_PASS, forgotpassSaga);
  yield takeEvery(CONST.RESET_PASS, resetpassSaga);
  yield takeEvery(CONST.CHANGE_PASS, changepassSaga);
}

export default LoginSaga;
