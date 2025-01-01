import * as CONST from "./constant";

const intialState = {
  user: {},
  id: null,
  token: localStorage.getItem("authToken") || "",
  error: null,
};

const LoginReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case CONST.LOGIN_USER_SUCCESS:
      return {
        ...state,
        id: payload._id,
        user: { ...payload },
        token: payload.token,
        error: null,
      };
    case CONST.LOGIN_USER_FAIL:
      return {
        ...state,
        error: payload,
      };

    // ========= LOGOUT ========= //

    case CONST.LOGOUT_SUCCESS:
      return {
        ...state,
        id: null,
        user: {},
        token: null,
        error: null,
      };
    case CONST.LOGOUT_FAIL:
      return {
        ...state,
        error: payload,
      };

    // ======== forgot pass ========= //

    case CONST.FORGOT_PASS_SUCCESS:
      return {
        ...state,
        id: payload._id,
        user: { ...payload },
        error: null,
      };
    case CONST.FORGOT_PASS_FAIL:
      return {
        ...state,
        error: payload,
      };

    // ======== reset pass ========= //

    case CONST.RESET_PASS_SUCCESS:
      return {
        ...state,
        id: payload._id,
        user: { ...payload },
        error: null,
      };
    case CONST.RESET_PASS_FAIL:
      return {
        ...state,
        error: payload,
      };

    case CONST.CHANGE_PASS_SUCCESS:
      return {
        ...state,
        id: payload._id,
        user: { ...payload },
        error: null,
      };
    case CONST.CHANGE_PASS_FAIL:
      return {
        ...state,
        error: payload,
      };

    default:
      return state;
      break;
  }
};

export default LoginReducer;
