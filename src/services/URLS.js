// export const API_URL = "https://api.imsohungry.com/api/v1";

//////********** TESTING URL *********************/

export const API_URL = "http://localhost:5001/authenticationservice/api/v1";

export const LOGIN_USER = "/user/login";
export const SIGNUP_USER = "/user/signup";
export const VERIFY_OTP = "/user/verifyotp";
export const SIGNUP_DRIVER = "/vendor/signup";

export const FORGOT_PASS = "/user/forgotpassword";
export const RESET_PASS = "/user/resetpassword";

export const NEARBY_RESTAURANT = "/user/nearby";
export const RESTAURANT_DETAIL = "/user/nearby/details";
export const GET_PRODUCT = "/user/web/products"
export const FRESH_MARKET_DETAIL = "/restaurant/getfreshmarketItemByResturent/";
export const COLLECTION_TAB = "/store/setting";
export const PRODUCT_DETAILS = "/user/product/"

export const GET_PROFILE = "/user/me";
export const GET_HOME = "/user/home";
export const GET_HOME_PAGE = "/pages/homepage"
export const EDIT_PROFILE = "/user/updateprofile";
export const UPDATE_PROFILE_IMAGE = "/file/add";
export const GET_IN_TOUCH = "/pages/support"
export const ADD_ADDRESS = "/address/add";
export const GET_ADDRESS = "/address";
export const VIEW_ADDRESS = "/address/view/";
export const EDIT_ADDRESS = "/address/update";
export const DEL_ADDRESS = "/address/remove";
export const ADD_PAYMENT = "/card/add";
export const PAYMENT_LIST = "/card/user/payments";
export const DELETE_CARD = "/card/remove";
export const CART_DETAILS = "/user/carts"
export const GET_PRODUCT_DETAIL = "/user/product/"

export const ADD_MONEY = "/card/addToWallet";

export const ADD_CART = "/cart/add";
export const UPDATE_ADD_CART = "/cart/update";
export const ADD_CART_QUANTITY = "/cart/update";

export const USER_CART = "/cart/";
export const USER_CART_REMOVE = "/cart/remove";

export const ADD_ORDER = "/order/add";

export const PROMOLIST = "/user/taxi/promocode/all";
export const DRIVERLIST = "/web/user/drivers/listing";

export const COMPARE_LIST = "/web/user/getallByfilter";

export const FAQ_LIST = "/pages/faq";

export const ORDERS_LIST = "/user/past/orders";
export const GET_UPCOMMING_LIST = "/user/upcoming/orders"
export const ORDER_DETAIL = "/user/orderdetails/";

export const FEEDBACK = "/user/feedbacktovendor";
export const FEEDBACK_DRIVER = "/user/feedbacktodriver";
export const BANNER_LIST = "/promotion/web";

export const PRIVACY_POLICY = "/pages/privacypolicy";
export const REFUNDPOLICY = "/pages/refundpolicy";
export const BENEFITS = "/pages/other/benefits"
export const CONTACTUS = "/pages/contactus"
export const ABOUT = "/pages/aboutus";
export const SECURITYGUIDANCE = "/pages/other/guidelines";
export const BLOG_LIST = "/blog/list";
export const BLOG_DETAIL = "/blog/getBySlug/";
export const CAREER_DETAIL = "/blog/getByCareer/"
export const TERMCONDITION = "/pages/tac"
export const CHANGE_PASSWORD = "/user/changepassword";

// export const GET_PROMOTION = "user/bonus";
// export const GET_PROMOTION_BY_ID = "user/bonusById/";
// export const GET_GAME_BY_ID = "game/gameById/";

export const VEHICLE_TYPE = "/delivery/web/vehicleTypes";
export const DOCUMENT_DRIVER = "/docTemplate/view/649abbb218e50e60ad30ccd7";
export const REGISTER_DRIVER = "/delivery/signup";
export const GET_SERVICE_PROVIDER = "/provider/driver/service/list"
export const JOBAPPLICATION = "/pages/jobApplication"
export const STRIPE_PUBLIC_KEY = "pk_test_LLAdXVApiHYl2QUmtHy2HiHT";

export const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
export const PASS_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
export const Numeric = /^[0-9]+$/;
export const ALPHABET = /^[A-Za-z]+$/;
export const ALPHANUMERIC_REGEX = /[^a-z\d]/i;
export const PASS_VALIDATION_MSG =
  "password should be at least 8 characters, one uppercase, lowercase, special character (@,-,~,_), numeric value.";
