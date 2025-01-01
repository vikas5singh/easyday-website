import * as CONST from "./constant";

export const loginUser = (payload, callBack) => {
  return {
    type: CONST.LOGIN_USER,
    payload: { ...payload },
    callBack,
  };
};

export const loginUserSuccess = (payload) => ({
  type: CONST.LOGIN_USER_SUCCESS,
  payload,
});

export const loginUserFail = (payload) => ({
  type: CONST.LOGIN_USER_FAIL,
  payload,
});

// ========== LOGOUT ============ //

export const logout = (payload) => {
  return {
    type: CONST.LOGOUT,
    payload: { ...payload },
  };
};

export const logoutSuccess = (payload) => ({
  type: CONST.LOGOUT_SUCCESS,
  payload,
});

export const logoutFail = (payload) => ({
  type: CONST.LOGOUT_FAIL,
  payload,
});

// ========== FORGOT PASS ========= //

export const forgotPass = (payload, callBack) => {
  return {
    type: CONST.FORGOT_PASS,
    payload: { ...payload },
    callBack,
  };
};

export const forgotPassSuccess = (payload) => ({
  type: CONST.FORGOT_PASS_SUCCESS,
  payload,
});

export const forgotPassFail = (payload) => ({
  type: CONST.FORGOT_PASS_FAIL,
  payload,
});

// ========= reset pass ========= //

export const resetPass = (payload, callBack) => {
  return {
    type: CONST.RESET_PASS,
    payload: { ...payload },
    callBack,
  };
};

export const resetPassSuccess = (payload) => ({
  type: CONST.RESET_PASS_SUCCESS,
  payload,
});

export const resetPassFail = (payload) => ({
  type: CONST.RESET_PASS_FAIL,
  payload,
});

// ========= reset pass ========= //

export const changePass = (payload, callBack) => {
  return {
    type: CONST.CHANGE_PASS,
    payload: { ...payload },
    callBack,
  };
};

export const changePassSuccess = (payload) => ({
  type: CONST.CHANGE_PASS_SUCCESS,
  payload,
});

export const changePassFail = (payload) => ({
  type: CONST.CHANGE_PASS_FAIL,
  payload,
});
