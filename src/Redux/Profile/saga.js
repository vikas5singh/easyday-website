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

function* getProfileSaga({ payload }) {
  try {
    const response = yield call(API.GET_PROFILE, payload);
    if (response.data.status == "success") {
    } else {
    }

    yield put(ACTION.getProfileSuccess(response.data.data));
  } catch (error) {
    yield put(ACTION.getProfileFail(error));
  }
}

function* editProfileSaga({ payload, callBack }) {
  try {
    const response = yield call(API.EDIT_PROFILE, payload);
    if (response.data.status == "success") {
      toast.success(response.data.message);
      callBack && callBack();
    } else toast.error(response.data.message);

    yield put(ACTION.editProfileSuccess(response.data.data));
  } catch (error) {
    yield put(ACTION.editProfileFail(error));
  }
}

function* updateProfileImageSaga({ payload, callBack }) {
  try {
    const response = yield call(API.UPDATE_PROFILE_IMAGE, payload);
    if (response?.data?.status == "success") {
      toast.success(response.data.message);
      callBack && callBack(response);
    } else {
      toast.error(
        response?.data?.message || "Failed to update profile picture."
      );
      callBack && callBack(response);
    }

    yield put(ACTION.updateProfileImageSuccess(response.data.data));
  } catch (error) {
    yield put(ACTION.updateProfileImageSuccess(error));
  }
}

function* getInTouchSaga({ payload, callBack }) {
  try {
    const response = yield call(API.GET_IN_TOUCH, payload);
    if (response?.data?.status == "success") {
      toast.success(response.data.message);
      callBack && callBack(response);
    } else {
      toast.error(
        response?.data?.message
      );
      callBack && callBack(response);
    }

    yield put(ACTION.getInTouchSuccess(response.data.data));
  } catch (error) {
    yield put(ACTION.getInTouchFail(error));
  }
}

function* ProfileSaga() {
  yield takeEvery(CONST.GET_PROFILE, getProfileSaga);
  yield takeEvery(CONST.EDIT_PROFILE, editProfileSaga);
  yield takeEvery(CONST.UPDATE_PROFILE_IMAGE, updateProfileImageSaga);
  yield takeEvery(CONST.GET_IN_TOUCH, getInTouchSaga);
}

export default ProfileSaga;
