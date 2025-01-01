import * as CONST from "./constant";

export const addAddress = (payload, callBack) => {
  return {
    type: CONST.ADD_ADDRESS,
    payload: { ...payload },
    callBack,
  };
};

export const addAddressSuccess = (payload) => ({
  type: CONST.ADD_ADDRESS_SUCCESS,
  payload,
});

export const addAddressFail = (payload) => ({
  type: CONST.ADD_ADDRESS_FAIL,
  payload,
});

// =========== DELETE ADDRESS ========== //

export const delAddress = (payload, callBack) => {
  return {
    type: CONST.DEL_ADDRESS,
    payload: { ...payload },
    callBack,
  };
};

export const delAddressSuccess = (payload) => ({
  type: CONST.DEL_ADDRESS_SUCCESS,
  payload,
});

export const delAddressFail = (payload) => ({
  type: CONST.DEL_ADDRESS_FAIL,
  payload,
});

// ========== GET ADDRESS =========== //

export const getAddress = (payload) => {
  return {
    type: CONST.GET_ADDRESS,
    payload: { ...payload },
  };
};

export const getAddressSuccess = (payload) => ({
  type: CONST.GET_ADDRESS_SUCCESS,
  payload,
});

export const getAddressFail = (payload) => ({
  type: CONST.GET_ADDRESS_FAIL,
  payload,
});

// ========= view address =========== //

export const viewAddress = (payload) => {
  return {
    type: CONST.VIEW_ADDRESS,
    payload: payload,
  };
};

export const viewAddressSuccess = (payload) => ({
  type: CONST.VIEW_ADDRESS_SUCCESS,
  payload,
});

export const viewAddressFail = (payload) => ({
  type: CONST.VIEW_ADDRESS_FAIL,
  payload,
});

// ========== EDIT ADDRESS ======== //

export const editAddress = (payload, callBack) => {
  return {
    type: CONST.EDIT_ADDRESS,
    payload: { ...payload },
    callBack,
  };
};

export const editAddressSuccess = (payload) => ({
  type: CONST.EDIT_ADDRESS_SUCCESS,
  payload,
});

export const editAddressFail = (payload) => ({
  type: CONST.EDIT_ADDRESS_FAIL,
  payload,
});

// ============ ADD PAYMENT ========= //

export const addPayment = (payload, callBack) => {
  return {
    type: CONST.ADD_PAYMENT,
    payload: { ...payload },
    callBack,
  };
};

export const addPaymentSuccess = (payload) => ({
  type: CONST.ADD_PAYMENT_SUCCESS,
  payload,
});

export const addPaymentFail = (payload) => ({
  type: CONST.ADD_PAYMENT_FAIL,
  payload,
});

// ========= PAYMENT LIST =========== //

export const paymentList = (payload) => {
  return {
    type: CONST.PAYMENT_LIST,
    payload: payload,
  };
};

export const paymentListSuccess = (payload) => ({
  type: CONST.PAYMENT_LIST_SUCCESS,
  payload,
});

export const paymentListFail = (payload) => ({
  type: CONST.PAYMENT_LIST_FAIL,
  payload,
});

// ============ DELETE CARD ========= //

export const delCard = (payload, callBack) => {
  return {
    type: CONST.DELETE_CARD,
    payload: { ...payload },
    callBack,
  };
};

export const delCardSuccess = (payload) => ({
  type: CONST.DELETE_CARD_SUCCESS,
  payload,
});

export const delCardFail = (payload) => ({
  type: CONST.DELETE_CARD_FAIL,
  payload,
});

// ============ ADD MONEY ========= //

export const addMoney = (payload, callBack) => {
  return {
    type: CONST.ADD_MONEY,
    payload: { ...payload },
    callBack,
  };
};

export const addMoneySuccess = (payload) => ({
  type: CONST.ADD_MONEY_SUCCESS,
  payload,
});

export const addMoneyFail = (payload) => ({
  type: CONST.ADD_MONEY_FAIL,
  payload,
});

// ============ ADD CART ========= //

export const addCart = (payload, callBack) => {
  return {
    type: CONST.ADD_CART,
    payload: { ...payload },
    callBack,
  };
};

export const addCartSuccess = (payload) => ({
  type: CONST.ADD_CART_SUCCESS,
  payload,
});

export const addCartFail = (payload) => ({
  type: CONST.ADD_CART_FAIL,
  payload,
});


//======== Update to cart ========//
export const updateAddCart = (payload, callBack) => {
  return {
    type: CONST.UPDATE_ADD_CART,
    payload: { ...payload },
    callBack,
  };
};

export const updateAddCartSuccess = (payload) => ({
  type: CONST.UPDATE_ADD_CART_SUCCESS,
  payload,
});

export const updateAddCartFail = (payload) => ({
  type: CONST.UPDATE_ADD_CART_FAIL,
  payload,
});


// ============ USER CART ========= //

export const userCart = (payload, callBack) => {
  return {
    type: CONST.USER_CART,
    payload: payload,
    callBack,
  };
};

export const userCartSuccess = (payload) => ({
  type: CONST.USER_CART_SUCCESS,
  payload,
});

export const userCartFail = (payload) => ({
  type: CONST.USER_CART_FAIL,
  payload,
});

// ============ ADD QUANTITY IN CART ========= //

export const addcartquanitity = (payload, callBack) => {
  return {
    type: CONST.ADD_CART_QUANTITY,
    payload: payload,
    callBack,
  };
};

export const addcartquanititySuccess = (payload) => ({
  type: CONST.ADD_CART_QUANTITY_SUCCESS,
  payload,
});

export const addcartquanitityFail = (payload) => ({
  type: CONST.ADD_CART_QUANTITY_FAIL,
  payload,
});
// ============ USER CART REMOVE ========= //



export const userCartRemove = (payload, callBack) => {
  return {
    type: CONST.USER_CART_REMOVE,
    payload: payload,
    callBack,
  };
};

export const userCartRemoveSuccess = (payload) => ({
  type: CONST.USER_CART_REMOVE_SUCCESS,
  payload,
});

export const userCartRemoveFail = (payload) => ({
  type: CONST.USER_CART_REMOVE_FAIL,
  payload,
});

// ============ SAVE DATA =========== //

export const savedata = (payload) => {
  return {
    type: CONST.SAVE_DATA,
    payload: payload,
  };
};

// ========== ADD ORDER =========== //

export const addOrder = (payload, callBack) => {
  return {
    type: CONST.ADD_ORDER,
    payload: { ...payload },
    callBack,
  };
};

export const addOrderSuccess = (payload) => ({
  type: CONST.ADD_ORDER_SUCCESS,
  payload,
});

export const addOrderFail = (payload) => ({
  type: CONST.ADD_ORDER_FAIL,
  payload,
});

// ========== PROMOLIST =========== //

export const promoList = (payload) => {
  return {
    type: CONST.PROMOLIST,
    payload: payload,
  };
};

export const promoListSuccess = (payload) => ({
  type: CONST.PROMOLIST_SUCCESS,
  payload,
});

export const promoListFail = (payload) => ({
  type: CONST.PROMOLIST_FAIL,
  payload,
});

// ========== DRIVER LIST ========== //

export const driverList = (payload) => {
  return {
    type: CONST.DRIVERLIST,
    payload: payload,
  };
};

export const driverListSuccess = (payload) => ({
  type: CONST.DRIVERLIST_SUCCESS,
  payload,
});

export const driverListFail = (payload) => ({
  type: CONST.DRIVERLIST_FAIL,
  payload,
});

// ========== COMPARE LIST ========== //

export const compareList = (payload) => {
  return {
    type: CONST.COMPARE_LIST,
    payload: payload,
  };
};

export const compareListSuccess = (payload) => ({
  type: CONST.COMPARE_LIST_SUCCESS,
  payload,
});

export const compareListFail = (payload) => ({
  type: CONST.COMPARE_LIST_FAIL,
  payload,
});

// ========== FAQ LIST ========== //

export const faqList = (payload) => {
  return {
    type: CONST.FAQ_LIST,
    payload: payload,
  };
};

export const faqListSuccess = (payload) => ({
  type: CONST.FAQ_LIST_SUCCESS,
  payload,
});

export const faqListFail = (payload) => ({
  type: CONST.FAQ_LIST_FAIL,
  payload,
});

// ========== orders list ============== //

export const ordersList = (payload) => {
  return {
    type: CONST.ORDERS_LIST,
    payload: payload,
  };
};

export const ordersListSuccess = (payload) => ({
  type: CONST.ORDERS_LIST_SUCCESS,
  payload,
});

export const ordersListFail = (payload) => ({
  type: CONST.ORDERS_LIST_FAIL,
  payload,
});

// ========= ORDER DETAIL =========== //

export const orderDetail = (payload) => {
  return {
    type: CONST.ORDER_DETAIL,
    payload: payload,
  };
};

export const orderDetailSuccess = (payload) => ({
  type: CONST.ORDER_DETAIL_SUCCESS,
  payload,
});

export const orderDetailFail = (payload) => ({
  type: CONST.ORDER_DETAIL_FAIL,
  payload,
});


// ========= ORDER DETAIL =========== //

export const orderUpcommingDetail = (payload) => {
  return {
    type: CONST.GET_UPCOMMING_LIST,
    payload: payload,
  };
};

export const orderUpcommingDetailSuccess = (payload) => ({
  type: CONST.GET_UPCOMMING_LIST_SUCCESS,
  payload,
});

export const orderUpcommingDetailFail = (payload) => ({
  type: CONST.GET_UPCOMMING_LIST_FAIL,
  payload,
});

// ============ FEEDBACK ========= //

export const feedBack = (payload, callBack) => {
  return {
    type: CONST.FEEDBACK,
    payload: { ...payload },
    callBack,
  };
};

export const feedBackSuccess = (payload) => ({
  type: CONST.FEEDBACK_SUCCESS,
  payload,
});

export const feedBackFail = (payload) => ({
  type: CONST.FEEDBACK_FAIL,
  payload,
});

export const cartDetail = (payload, callBack) => {
  return {
    type: CONST.CART_DETAILS,
    payload: { ...payload },
    callBack,
  };
};

export const cartDetailSuccess = (payload) => ({
  type: CONST.CART_DETAILS_SUCCESS,
  payload,
});

export const cartDetailFail = (payload) => ({
  type: CONST.CART_DETAILS_FAIL,
  payload,
});


export const productDetail = (payload, callBack) => {
  return {
    type: CONST.GET_PRODUCT_DETAILS,
    payload: payload,
    callBack,
  };
};

export const productDetailSuccess = (payload) => ({
  type: CONST.GET_PRODUCT_DETAILS_SUCCESS,
  payload,
});

export const productDetailFail = (payload) => ({
  type: CONST.GET_PRODUCT_DETAILS_FAIL,
  payload,
});
