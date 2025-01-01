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

function* addAddressSaga({ payload, callBack }) {
  try {
    const response = yield call(API.ADD_ADDRESS, payload);
    if (response.data.status == "success") {
      toast.success(response.data.message);
      callBack && callBack();
    }

    yield put(ACTION.addAddressSuccess(response.data.data));
  } catch (error) {
    yield put(ACTION.addAddressFail(error));
  }
}

// ========= delete address ============ //

function* delAddressSaga({ payload, callBack }) {
  try {
    const response = yield call(API.DEL_ADDRESS, payload);
    if (response.data.status == "success") {
      toast.success(response.data.message);
      callBack && callBack();
    }

    yield put(ACTION.addAddressSuccess(response.data.data));
  } catch (error) {
    yield put(ACTION.addAddressFail(error));
  }
}

// ========= get address ============ //

function* getAddressSaga({ payload }) {
  try {
    const response = yield call(API.GET_ADDRESS, payload);
    if (response.data.status == "success") {
    }

    yield put(ACTION.getAddressSuccess(response.data.data));
  } catch (error) {
    yield put(ACTION.getAddressFail(error));
  }
}

// ========= view address ============ //

function* viewAddressSaga(payload) {
  try {
    const response = yield call(API.VIEW_ADDRESS, payload.payload);
    if (response.data.status == "success") {
    }

    yield put(ACTION.viewAddressSuccess(response.data.data));
  } catch (error) {
    yield put(ACTION.viewAddressFail(error));
  }
}

// ========= edit address ============ //

function* editAddressSaga({ payload, callBack }) {
  try {
    const response = yield call(API.EDIT_ADDRESS, payload);
    if (response.data.status == "success") {
      toast.success(response.data.message);
      callBack && callBack();
    }

    yield put(ACTION.editAddressSuccess(response.data.data));
  } catch (error) {
    yield put(ACTION.editAddressFail(error));
  }
}

// ========= add payment ============ //

function* addPaymentSaga({ payload, callBack }) {
  try {
    const response = yield call(API.ADD_PAYMENT, payload);
    if (response.data.status == "success") {
      toast.success(response.data.message);
      callBack && callBack();
    }

    yield put(ACTION.addPaymentSuccess(response.data.data));
  } catch (error) {
    yield put(ACTION.addPaymentFail(error));
  }
}

// ========= payment list ============ //

function* paymentListSaga(payload) {
  try {
    const response = yield call(API.PAYMENT_LIST, payload);
    if (response.data.status == "success") {
    }

    yield put(ACTION.paymentListSuccess(response.data.data));
  } catch (error) {
    yield put(ACTION.paymentListFail(error));
  }
}

// ========= delete card ============ //

function* delCardSaga({ payload, callBack }) {
  try {
    const response = yield call(API.DELETE_CARD, payload);
    if (response.data.status == "success") {
      toast.success(response.data.message);
      callBack && callBack();
    }

    yield put(ACTION.addPaymentSuccess(response.data.data));
  } catch (error) {
    yield put(ACTION.addPaymentFail(error));
  }
}

// ========= add money ============ //

function* addMoneySaga({ payload, callBack }) {
  try {
    const response = yield call(API.ADD_MONEY, payload);
    callBack && callBack(response.data);

    // if (response.data.status == "success") {
    //   toast.success(response.data.message);
    // }

    yield put(ACTION.addMoneySuccess(response.data.data));
  } catch (error) {
    yield put(ACTION.addMoneyFail(error));
  }
}

// ========= add cart ============ //

function* addCartSaga({ payload, callBack }) {
  try {
    const response = yield call(API.ADD_CART, payload);

    if (response?.data?.status == "success") {
      callBack && callBack(response.data);
    } else {
      callBack && callBack(response);
    }

    yield put(ACTION.addCartSuccess(response.data.data));
  } catch (error) {
    yield put(ACTION.addCartFail(error));
  }
}

// ========= Update to cart ==============//
function* updateAddCartSaga({ payload, callBack }) {
  try {
    const response = yield call(API.UPDATE_ADD_CART, payload);

    if (response?.data?.status == "success") {
      callBack && callBack(response.data);
    } else {
      callBack && callBack(response);
    }

    yield put(ACTION.updateAddCartSuccess(response.data.data));
  } catch (error) {
    yield put(ACTION.updateAddCartFail(error));
  }
}

// ========= add cart quantity============ //

function* addCartquantitySaga({ payload, callBack }) {
  try {
    const response = yield call(API.ADD_CART_QUANTITY, payload);

    if (response?.data?.status == "success") {
      callBack && callBack(response.data);
    } else {
      callBack && callBack(response);
    }

    yield put(ACTION.addcartquanititySuccess(response.data.data));
  } catch (error) {
    yield put(ACTION.addcartquanitityFail(error));
  }
}

// ========= user cart ============ //

function* userCartSaga({ payload, callBack }) {
  console.log("payload", payload);
  try {
    const response = yield call(API.USER_CART, payload?.cart_key);
    if (response.data.status == "success") {
      callBack && callBack(response);
    } else {
      callBack && callBack(response);
    }

    yield put(ACTION.userCartSuccess(response.data));
  } catch (error) {
    yield put(ACTION.userCartFail(error));
  }
}

// ========= user cart remove ============ //

function* userCartRemoveSaga({ payload, callBack }) {
  try {
    const response = yield call(API.USER_CART_REMOVE, payload);
    if (response.data.status == "success") {
      callBack && callBack(response);
    } else {
      callBack && callBack(response);
    }

    yield put(ACTION.userCartRemoveSuccess(response.data));
  } catch (error) {
    yield put(ACTION.userCartRemoveFail(error));
  }
}

// ========= add order ============ //

function* addOrderSaga({ payload, callBack }) {
  try {
    const response = yield call(API.ADD_ORDER, payload);
    if (response.data.status == "success") {
      toast.success(response.data.message);
      callBack && callBack(response.data.data?.orderId);
    } else {
      toast.error(response.data.message);
    }

    yield put(ACTION.addOrderSuccess(response.data.data));
  } catch (error) {
    yield put(ACTION.addOrderFail(error));
  }
}

// ========= promolist ============ //

function* promolistSaga({ payload }) {
  try {
    const response = yield call(API.PROMOLIST, payload);
    if (response.data.status == "success") {
    }

    yield put(ACTION.promoListSuccess(response.data.data));
  } catch (error) {
    yield put(ACTION.promoListFail(error));
  }
}

// =========== drive list =========== //

function* driverlistSaga({ payload }) {
  try {
    const response = yield call(API.DRIVERLIST, payload);
    if (response.data.status == "success") {
    }

    yield put(ACTION.driverListSuccess(response.data.data));
  } catch (error) {
    yield put(ACTION.driverListFail(error));
  }
}

// =========== compare list =========== //

function* comparelistSaga({ payload }) {
  try {
    const response = yield call(API.COMPARE_LIST, payload);
    if (response.data.status == "success") {
    }

    yield put(ACTION.compareListSuccess(response.data.data));
  } catch (error) {
    yield put(ACTION.compareListFail(error));
  }
}

// =========== faq list =========== //

function* faqlistSaga({ payload }) {
  try {
    const response = yield call(API.FAQ_LIST);
    if (response.data.status == "success") {
    }

    yield put(ACTION.faqListSuccess(response.data.data));
  } catch (error) {
    yield put(ACTION.faqListFail(error));
  }
}

// =========== orders list =========== //

function* orderslistSaga({ payload }) {
  try {
    const response = yield call(API.ORDERS_LIST, payload);
    if (response.data.status == "success") {
    }

    yield put(ACTION.ordersListSuccess(response.data.data));
  } catch (error) {
    yield put(ACTION.ordersListFail(error));
  }
}

function* ordersUpcominglistSaga({ payload }) {
  try {
    const response = yield call(API.GET_UPCOMMING_LIST, payload);
    if (response.data.status == "success") {
    }

    yield put(ACTION.orderUpcommingDetailSuccess(response.data.data));
  } catch (error) {
    yield put(ACTION.orderUpcommingDetailFail(error));
  }
}

// ========= order detail ============ //

function* orderDetailSaga(payload) {
  try {
    const response = yield call(API.ORDER_DETAIL, payload.payload);
    if (response.data.status == "success") {
    }

    yield put(ACTION.orderDetailSuccess(response.data.data));
  } catch (error) {
    yield put(ACTION.orderDetailFail(error));
  }
}

// ========= feedback ============ //

function* feedBackSaga({ payload, callBack }) {
  try {
    const response = yield call(API.FEEDBACK, {
      ...payload,
      rating: payload?.restrating,
      review: payload?.restReview,
    });
    const response2 = yield call(API.FEEDBACK_DRIVER, {
      ...payload,
      rating: payload?.driverRating,
      review: payload?.driverReview,
    }
    );
    if (response.data.status == "success") {
      toast.success(response.data.message);
      callBack && callBack(response.data.status);
    }

    yield put(ACTION.feedBackSuccess(response.data.data));
  } catch (error) {
    yield put(ACTION.feedBackFail(error));
  }
}
function* cartDetailSaga({ payload, callBack }) {
  try {
    const response = yield call(API.CART_DETAILS, payload);
    if (response.data.status == "success") {
      // toast.success("Updated Successfully!");
      callBack && callBack(response.data.status);
    } else {
      if (response?.data?.message == "INVALID ITEMS") {
        toast.error("Please choose one module at a time. Otherwise invalid items!");
      } else {
        // toast.error(response.data.message);
      }
    }

    yield put(ACTION.cartDetailSuccess(response.data.data));
  } catch (error) {
    yield put(ACTION.cartDetailFail(error));
  }
}
function* producttDetailSaga({ payload, callBack }) {
  console.log("productpayload===>", payload)
  try {
    const response = yield call(API.GET_PRODUCT_DETAILS, payload);
    if (response.data.status == "success") {
      toast.success(response.data.message);
      callBack && callBack(response.data.status);
    }

    yield put(ACTION.productDetailSuccess(response.data.data));
  } catch (error) {
    yield put(ACTION.productDetailFail(error));
  }
}


function* AddAddressSaga() {
  yield takeEvery(CONST.ADD_ADDRESS, addAddressSaga);
  yield takeEvery(CONST.GET_ADDRESS, getAddressSaga);
  yield takeEvery(CONST.VIEW_ADDRESS, viewAddressSaga);
  yield takeEvery(CONST.EDIT_ADDRESS, editAddressSaga);
  yield takeEvery(CONST.DEL_ADDRESS, delAddressSaga);
  yield takeEvery(CONST.ADD_PAYMENT, addPaymentSaga);
  yield takeEvery(CONST.PAYMENT_LIST, paymentListSaga);
  yield takeEvery(CONST.DELETE_CARD, delCardSaga);
  yield takeEvery(CONST.ADD_MONEY, addMoneySaga);
  yield takeEvery(CONST.ADD_CART, addCartSaga);
  yield takeEvery(CONST.ADD_CART_QUANTITY, addCartquantitySaga);
  yield takeEvery(CONST.UPDATE_ADD_CART, updateAddCartSaga);
  yield takeEvery(CONST.USER_CART, userCartSaga);
  yield takeEvery(CONST.USER_CART_REMOVE, userCartRemoveSaga);
  yield takeEvery(CONST.ADD_ORDER, addOrderSaga);
  yield takeEvery(CONST.PROMOLIST, promolistSaga);
  yield takeEvery(CONST.DRIVERLIST, driverlistSaga);
  yield takeEvery(CONST.COMPARE_LIST, comparelistSaga);
  yield takeEvery(CONST.FAQ_LIST, faqlistSaga);
  yield takeEvery(CONST.ORDERS_LIST, orderslistSaga);
  yield takeEvery(CONST.ORDER_DETAIL, orderDetailSaga);
  yield takeEvery(CONST.FEEDBACK, feedBackSaga);
  yield takeEvery(CONST.CART_DETAILS, cartDetailSaga);
  yield takeEvery(CONST.GET_PRODUCT_DETAILS, producttDetailSaga);
  yield takeEvery(CONST.GET_UPCOMMING_LIST, ordersUpcominglistSaga);
}

export default AddAddressSaga;
