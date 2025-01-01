import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

import { take, put, call, takeEvery } from "redux-saga/effects";

const sagaMiddleware = createSagaMiddleware();

export const LOGIN_USER = "LOGIN_USER";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAIL = "LOGIN_USER_FAIL";

// Actions

export const changeName = (payload) => {
  return {
    type: LOGIN_USER,
    payload,
  };
};
export const changeNameSuccess = ({ type, payload }) => {
  return {
    type: LOGIN_USER_SUCCESS,
    payload,
  };
};

// Sagas
function* changeNameSaga(payload) {
  yield put(changeNameSuccess(payload));
}

function* watcher() {
  yield takeEvery(LOGIN_USER, changeNameSaga);
}

const reducer = (state = { ll: "HHHh" }, { type, payload }) => {
  switch (type) {
    case LOGIN_USER_SUCCESS:
      return { ...payload };

    default:
      return state;
      break;
  }
};

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watcher);

export default store;
