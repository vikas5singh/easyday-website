import * as CONST from "./constant";

const intialState = {
  user: {},
  id: null,
  error: null,
};

const SignupReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case CONST.SIGNUP_USER_SUCCESS:
      return {
        ...state,
        id: payload._id,
        user: { ...payload },
        error: null,
      };
    case CONST.SIGNUP_USER_FAIL:
      return {
        ...state,
        error: payload,
      };

    // =========== verify otp ========= //

    case CONST.VERIFY_OTP_SUCCESS:
      return {
        ...state,
        id: payload._id,
        user: { ...payload },
        error: null,
      };
    case CONST.VERIFY_OTP_FAIL:
      return {
        ...state,
        error: payload,
      };

    case CONST.SIGNUP_DRIVER_SUCCESS:
      return {
        ...state,
        error: null,
      };
    case CONST.SIGNUP_DRIVER_FAIL:
      return {
        ...state,
        error: payload,
      };

    default:
      return state;
      break;
  }
};

export default SignupReducer;
