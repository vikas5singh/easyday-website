import * as CONST from "./constant";

export const signupUser = (payload, callBack) => {
  return {
    type: CONST.SIGNUP_USER,
    payload: { ...payload },
    callBack,
  };
};

export const signupUserSuccess = (payload) => ({
  type: CONST.SIGNUP_USER_SUCCESS,
  payload,
});

export const signupUserFail = (payload) => ({
  type: CONST.SIGNUP_USER_FAIL,
  payload,
});

// =============== VERIFY OTP ============ //

export const verifyOtp = (payload, callBack) => {
  return {
    type: CONST.VERIFY_OTP,
    payload: { ...payload },
    callBack,
  };
};

export const verifyOtpSuccess = (payload) => ({
  type: CONST.VERIFY_OTP_SUCCESS,
  payload,
});

export const verifyOtpFail = (payload) => ({
  type: CONST.VERIFY_OTP_FAIL,
  payload,
});


//driver signup
export const signupDriver = (payload, callBack) => {
  return {
    type: CONST.SIGNUP_DRIVER,
    payload: payload,
    callBack,
  };
};

export const signupDriverSuccess = (payload) => ({
  type: CONST.SIGNUP_DRIVER_SUCCESS,
  payload,
});

export const signupDriverFail = (payload) => ({
  type: CONST.SIGNUP_DRIVER_FAIL,
  payload,
});
