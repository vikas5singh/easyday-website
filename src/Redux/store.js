import { applyMiddleware, createStore, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import {
  put,
  call,
  take,
  every,
  takeLatest,
  takeEvery,
} from "redux-saga/effects";

import rootReducer from "./reducers";
import rootSaga from "./sagas";

// Configure persist settings
const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Set up Redux DevTools if available, else use regular compose
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

// Create the store with persisted reducer and saga middleware
const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

// Run the root saga
sagaMiddleware.run(rootSaga);

// Configure persistor for persisting the store
const persistor = persistStore(store);

export { store, persistor };
