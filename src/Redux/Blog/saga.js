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

function* blogListSaga({ payload }) {
  try {
    const response = yield call(API.BLOG_LIST, payload);

    yield put(ACTION.blogListSuccess(response.data.data));
  } catch (error) {
    yield put(ACTION.blogListFail(error));
  }
}

function* blogDetailSaga({ payload }) {
  try {
    const response = yield call(API.BLOG_DETAIL, payload);

    yield put(ACTION.blogDetailSuccess(response.data.data));
  } catch (error) {
    yield put(ACTION.blogDetailFail(error));
  }
}

function* careerDetailsSaga({ payload }) {
  try {
    const response = yield call(API.CAREER_DETAIL, payload);

    yield put(ACTION.careerDetailSuccess(response.data.data));
  } catch (error) {
    yield put(ACTION.careerDetailFail(error));
  }
}

function* BlogSaga() {
  yield takeEvery(CONST.BLOG_LIST, blogListSaga);
  yield takeEvery(CONST.BLOG_DETAIL, blogDetailSaga);
  yield takeEvery(CONST.CAREER_DETAIL, careerDetailsSaga);
}

export default BlogSaga;
