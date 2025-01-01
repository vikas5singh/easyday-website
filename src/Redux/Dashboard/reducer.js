import * as CONST from "./constant";

const intialState = {
  user: {},
  profile: {},
  address: {},
  editAddr: {},
  payment: {},
  id: null,
  error: null,
  money: {},
  paymentList: {},
  cart: {},
  order: {},
  cartDetail: {},
  // loading: false,
  usercart: [],
  product: {},
  ordersUpcomingList: [],
  savedData: JSON.parse(localStorage.getItem("items")),
  restaurantId: JSON.parse(
    localStorage.getItem("restaurantID") === "undefined"
      ? null
      : localStorage.getItem("restaurantID") || null
  ),
};

const AddressReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case CONST.ADD_ADDRESS_SUCCESS:
      return {
        ...state,
        address: { ...payload },
        error: null,
      };
    case CONST.ADD_ADDRESS_FAIL:
      return {
        ...state,
        error: payload,
      };

    // =========== delete address ========== //

    case CONST.DEL_ADDRESS_SUCCESS:
      return {
        ...state,
        editAddr: { ...payload },
        error: null,
      };
    case CONST.DEL_ADDRESS_FAIL:
      return {
        ...state,
        error: payload,
      };

    // ========== get address ============ //

    case CONST.GET_ADDRESS_SUCCESS:
      return {
        ...state,
        address: [...payload],
        error: null,
      };
    case CONST.GET_ADDRESS_FAIL:
      return {
        ...state,
        error: payload,
      };

    // ======== view address ========== //

    case CONST.VIEW_ADDRESS_SUCCESS:
      return {
        ...state,
        editAddr: payload,
        error: null,
      };
    case CONST.VIEW_ADDRESS_FAIL:
      return {
        ...state,
        error: payload,
      };

    // ======== edit address ======= //

    case CONST.EDIT_ADDRESS_SUCCESS:
      return {
        ...state,
        address: { ...payload },
        error: null,
      };
    case CONST.EDIT_ADDRESS_FAIL:
      return {
        ...state,
        error: payload,
      };

    // ========= ADD PAYMENT ========= //

    case CONST.ADD_PAYMENT_SUCCESS:
      return {
        ...state,
        payment: { ...payload },
        error: null,
      };
    case CONST.ADD_PAYMENT_FAIL:
      return {
        ...state,
        error: payload,
      };

    // ======== payment list ========== //

    case CONST.PAYMENT_LIST_SUCCESS:
      return {
        ...state,
        paymentList: payload,
        error: null,
      };
    case CONST.PAYMENT_LIST_FAIL:
      return {
        ...state,
        error: payload,
      };

    // ========= delete card ========= //

    case CONST.DELETE_CARD_SUCCESS:
      return {
        ...state,
        payment: { ...payload },
        error: null,
      };
    case CONST.DELETE_CARD_FAIL:
      return {
        ...state,
        error: payload,
      };

    // ========= add money ========= //

    case CONST.ADD_MONEY_SUCCESS:
      return {
        ...state,
        money: { ...payload },
        error: null,
      };
    case CONST.ADD_MONEY_FAIL:
      return {
        ...state,
        error: payload,
      };

    // ========= add cart ========= //

    case CONST.ADD_CART_SUCCESS:
      return {
        ...state,
        cart: { ...payload },
        error: null,
      };
    case CONST.ADD_CART_FAIL:
      return {
        ...state,
        error: payload,
      };

    // ============ update to cart =========//


    case CONST.UPDATE_ADD_CART_SUCCESS:
      return {
        ...state,
        cart: { ...payload },
        error: null,
      };
    case CONST.UPDATE_ADD_CART_FAIL:
      return {
        ...state,
        error: payload,
      };

    // ========= add cart quantity ========= //

    case CONST.ADD_CART_QUANTITY_SUCCESS:
      return {
        ...state,
        cart: { ...payload },
        error: null,
      };
    case CONST.ADD_CART_QUANTITY_FAIL:
      return {
        ...state,
        error: payload,
      };

    // ========= user cart ========= //

    case CONST.USER_CART_SUCCESS:
      return {
        ...state,
        usercart: payload,
        savedData: payload?.data,
        // loading: false,
        error: null,
      };
    case CONST.USER_CART_FAIL:
      return {
        ...state,
        error: payload,
      };

    // ========= user cart remove ========= //

    case CONST.USER_CART_REMOVE_SUCCESS:
      return {
        ...state,
        //usercart: payload,
        error: null,
      };
    case CONST.USER_CART_REMOVE_FAIL:
      return {
        ...state,
        error: payload,
      };

    // ========= save data ========== //

    case CONST.SAVE_DATA:
      localStorage.setItem("items", JSON.stringify(payload.allItem));
      localStorage.setItem("restaurantID", JSON.stringify(payload.restId));

      return {
        ...state,
        savedData: payload.allItem,
        restaurantId: payload.restId,
        error: null,
      };

    // ========== add order ========= //

    case CONST.ADD_ORDER_SUCCESS:
      return {
        ...state,
        order: { ...payload },
        error: null,
      };
    case CONST.ADD_ORDER_FAIL:
      return {
        ...state,
        error: payload,
      };

    // ========== promolist ========= //

    case CONST.PROMOLIST_SUCCESS:
      return {
        ...state,
        promocodes: payload,
        error: null,
      };
    case CONST.PROMOLIST_FAIL:
      return {
        ...state,
        error: payload,
      };

    // ========= driver list ========= //

    case CONST.DRIVERLIST_SUCCESS:
      return {
        ...state,
        drivers: payload,
        error: null,
      };
    case CONST.DRIVERLIST_FAIL:
      return {
        ...state,
        error: payload,
      };

    // ========= compare list ========= //

    case CONST.COMPARE_LIST_SUCCESS:
      return {
        ...state,
        compareList: payload,
        error: null,
      };
    case CONST.COMPARE_LIST_FAIL:
      return {
        ...state,
        error: payload,
      };

    // ========= faq list ========= //

    case CONST.FAQ_LIST_SUCCESS:
      return {
        ...state,
        faqs: payload,
        error: null,
      };
    case CONST.FAQ_LIST_FAIL:
      return {
        ...state,
        error: payload,
      };

    // ========= orders list ========= //

    case CONST.ORDERS_LIST_SUCCESS:
      return {
        ...state,
        ordersList: payload,
        error: null,
      };
    case CONST.ORDERS_LIST_FAIL:
      return {
        ...state,
        error: payload,
      };

    // ========= orders list ========= //

    case CONST.GET_UPCOMMING_LIST_SUCCESS:
      return {
        ...state,
        ordersUpcomingList: payload,
        error: null,
      };
    case CONST.GET_UPCOMMING_LIST_FAIL:
      return {
        ...state,
        error: payload,
      };

    // ======== order detail ========== //

    case CONST.ORDER_DETAIL_SUCCESS:
      return {
        ...state,
        orderDetail: payload,
        error: null,
      };
    case CONST.ORDER_DETAIL_FAIL:
      return {
        ...state,
        error: payload,
      };

    // ========= feedback ========= //

    case CONST.FEEDBACK_SUCCESS:
      return {
        ...state,
        feedback: { ...payload },
        error: null,
      };
    case CONST.FEEDBACK_FAIL:
      return {
        ...state,
        error: payload,
      };
    case CONST.CART_DETAILS_SUCCESS:
      return {
        ...state,
        cartDetail: { ...payload },
        error: null,
      };
    case CONST.CART_DETAILS_FAIL:
      return {
        ...state,
        error: payload,
      };

    case CONST.GET_PRODUCT_DETAILS_SUCCESS:
      return {
        ...state,
        product: { ...payload },
        error: null,
      };
    case CONST.GET_PRODUCT_DETAILS_FAIL:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
      break;
  }
};

export default AddressReducer;
