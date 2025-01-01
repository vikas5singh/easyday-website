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

function* vehicleTypeSaga({ payload, callBack }) {
  try {
    const response = yield call(API.VEHICLE_TYPE, payload);
    if (response.data.status == "success") {
      // toast.success(response.data.message);
      callBack && callBack(response.data);
    }

    yield put(ACTION.vehicleTypeSuccess(response.data));
  } catch (error) {
    yield put(ACTION.vehicleTypeFail(error));
  }
}

function* documentDriverSaga({ payload, callBack }) {
  try {
    const response = yield call(API.DOCUMENT_DRIVER, payload);
    if (response.data.status == "success") {
      // toast.success(response.data.message);
      callBack && callBack(response.data);
    }

    yield put(ACTION.documentDriverSuccess(response.data));
  } catch (error) {
    yield put(ACTION.documentDriverFail(error));
  }
}

function* registerDriverSaga({ payload, callBack }) {
  try {
    const response = yield call(API.REGISTER_DRIVER, payload);
    if (response.data.status == "success") {
      toast.success(response.data.message);
      callBack && callBack(response.data);
    } else {
      toast.error(response.data.message);
    }
    yield put(ACTION.driverRegisterSuccess(response.data));
  } catch (error) {
    yield put(ACTION.driverRegisterFail(error));
  }
}

function* getServiceSaga({ payload, callBack }) {
  try {
    const response = yield call(API.GET_SERVICE_PROVIDER, payload);
    if (response.data.status == "success") {
      callBack && callBack(response.data);
    } else {
      toast.error(response.data.message);
    }
    yield put(ACTION.getServiceSuccess(response.data));
  } catch (error) {
    yield put(ACTION.getServiceFail(error));
  }
}

function* jobApplicationSaga({ payload, callBack }) {
  try {
    const response = yield call(API.JOBAPPLICATION, payload);
    if (response.data.status == "success") {
      toast.success(response.data.message);
      callBack && callBack(response.data);
    } else {
      toast.error(response.data.message);
    }
    yield put(ACTION.jobApplicationSuccess(response.data));
  } catch (error) {
    yield put(ACTION.jobApplicationFail(error));
  }
}

function* VehicleTypeSaga() {
  yield takeEvery(CONST.VEHICLE_TYPE, vehicleTypeSaga);
  yield takeEvery(CONST.DOCUMENT_DRIVER, documentDriverSaga);
  yield takeEvery(CONST.REGISTER_DRIVER, registerDriverSaga);
  yield takeEvery(CONST.GET_SERVICE_PROVIDER, getServiceSaga);
  yield takeEvery(CONST.JOBAPPLICATION, jobApplicationSaga);
}

export default VehicleTypeSaga;
