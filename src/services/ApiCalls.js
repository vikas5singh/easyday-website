import Axios from "./Axios";
import * as API from "./URLS";

// export const SUPPORT_USER = (data) => Axios.post(API.SUPPORT_USER, data);
export const LOGIN_USER = (data) => Axios.post(API.LOGIN_USER, data);
export const SIGNUP_USER = (data) => Axios.post(API.SIGNUP_USER, data);
export const VERIFY_OTP = (data) => Axios.post(API.VERIFY_OTP, data);
export const SIGNUP_DRIVER = (data) => Axios.post(API.SIGNUP_DRIVER, data);

export const FORGOT_PASS = (data) => Axios.post(API.FORGOT_PASS, data);
export const RESET_PASS = (data) => Axios.post(API.RESET_PASS, data);
export const CHANGE_PASSWORD = (data) => Axios.post(API.CHANGE_PASSWORD, data);
export const NEARBY_RESTAURANT = (data) =>
  Axios.post(API.NEARBY_RESTAURANT, data);

export const COLLECTION_TAB = (data) => Axios.get(API.COLLECTION_TAB, data);

export const RESTAURANT_DETAIL = (data) =>
  Axios.post(API.RESTAURANT_DETAIL, data);

export const FRESH_MARKET_DETAIL = (data) =>
  Axios.get(API.FRESH_MARKET_DETAIL + data);

export const GET_PRODUCT = (data) =>
  Axios.post(API.GET_PRODUCT, data);
export const PRODUCT_DETAILS = (data) => Axios.get(API.PRODUCT_DETAILS + data);
export const GET_HOME = (data) =>
  Axios.post(API.GET_HOME, data);
export const GET_HOME_PAGE = (data) =>
  Axios.get(API.GET_HOME_PAGE, data);

export const GET_PROFILE = (data) => Axios.get(API.GET_PROFILE, data);
export const EDIT_PROFILE = (data) => Axios.post(API.EDIT_PROFILE, data);
export const UPDATE_PROFILE_IMAGE = (data) =>
  Axios.post(API.UPDATE_PROFILE_IMAGE, data);
export const GET_IN_TOUCH = (data) =>
  Axios.post(API.GET_IN_TOUCH, data);

export const ADD_ADDRESS = (data) => Axios.post(API.ADD_ADDRESS, data);
export const DEL_ADDRESS = (data) => Axios.post(API.DEL_ADDRESS, data);
export const EDIT_ADDRESS = (data) => Axios.post(API.EDIT_ADDRESS, data);
export const GET_ADDRESS = (data) => Axios.get(API.GET_ADDRESS);
export const VIEW_ADDRESS = (data) => Axios.get(API.VIEW_ADDRESS + data);

export const ADD_PAYMENT = (data) => Axios.post(API.ADD_PAYMENT, data);
export const PAYMENT_LIST = (data) => Axios.get(API.PAYMENT_LIST, data);
export const DELETE_CARD = (data) => Axios.post(API.DELETE_CARD, data);

export const ADD_MONEY = (data) => Axios.post(API.ADD_MONEY, data);

export const ADD_CART = (data) => Axios.post(API.ADD_CART, data);
export const UPDATE_ADD_CART = (data) => Axios.post(API.UPDATE_ADD_CART, data);

export const ADD_CART_QUANTITY = (data) =>
  Axios.post(API.ADD_CART_QUANTITY, data);

export const USER_CART = (data) => Axios.get(API.USER_CART + data);
export const USER_CART_REMOVE = (data) =>
  Axios.post(API.USER_CART_REMOVE, data);

export const ADD_ORDER = (data) => Axios.post(API.ADD_ORDER, data);

export const PROMOLIST = (data) => Axios.post(API.PROMOLIST, data);
export const DRIVERLIST = (data) => Axios.post(API.DRIVERLIST, data);

export const COMPARE_LIST = (data) => Axios.post(API.COMPARE_LIST, data);
export const FAQ_LIST = (data) => Axios.get(API.FAQ_LIST);

export const ORDERS_LIST = (data) => Axios.post(API.ORDERS_LIST, data);
export const GET_UPCOMMING_LIST = (data) => Axios.post(API.GET_UPCOMMING_LIST, data);
export const ORDER_DETAIL = (data) => Axios.get(API.ORDER_DETAIL + data);
export const ABOUT = (data) => Axios.get(API.ABOUT);
export const SECURITYGUIDANCE = (data) => Axios.get(API.SECURITYGUIDANCE);
export const FEEDBACK = (data) => Axios.post(API.FEEDBACK, data);
export const FEEDBACK_DRIVER = (data) => Axios.post(API.FEEDBACK_DRIVER, data);

export const CART_DETAILS = (data) => Axios.post(API.CART_DETAILS, data);
export const GET_PRODUCT_DETAILS = (data) => Axios.get(API.GET_PRODUCT_DETAIL + data);
export const BANNER_LIST = (data) => Axios.post(API.BANNER_LIST, data);

export const PRIVACY_POLICY = (data) => Axios.get(API.PRIVACY_POLICY, data);
export const REFUNDPOLICY = (data) => Axios.get(API.REFUNDPOLICY, data);
export const BENEFITS = (data) => Axios.get(API.BENEFITS, data);
export const CONTACTUS = (data) => Axios.get(API.CONTACTUS, data);
export const TERMCONDITION = (data) => Axios.get(API.TERMCONDITION, data);
//**************** BLOG LIST ****************************/

export const BLOG_LIST = (data) => Axios.post(API.BLOG_LIST, data);
export const BLOG_DETAIL = (data) => Axios.get(API.BLOG_DETAIL + data);
export const CAREER_DETAIL = (data) => Axios.get(API.CAREER_DETAIL + data);

export const VEHICLE_TYPE = (data) => Axios.post(API.VEHICLE_TYPE, data);
export const DOCUMENT_DRIVER = (data) => Axios.get(API.DOCUMENT_DRIVER, data);
export const REGISTER_DRIVER = (data) => Axios.post(API.REGISTER_DRIVER, data);
export const GET_SERVICE_PROVIDER = (data) => Axios.post(API.GET_SERVICE_PROVIDER, data)
export const JOBAPPLICATION = (data) => Axios.post(API.JOBAPPLICATION, data)
