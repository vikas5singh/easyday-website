import * as CONST from "./constant";

export const refundPolicy = (payload, callBack) => {
  return {
    type: CONST.REFUNDPOLICY,
    payload: { ...payload },
    callBack,
  };
};

export const refundPolicySuccess = (payload) => ({
  type: CONST.REFUNDPOLICY_SUCCESS,
  payload,
});

export const refundPolicyFail = (payload) => ({
  type: CONST.REFUNDPOLICY_FAIL,
  payload,
});
