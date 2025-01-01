import * as CONST from "./constant";

export const securityGuidance = (payload, callBack) => {
  return {
    type: CONST.SECURITYGUIDANCE,
    payload: { ...payload },
    callBack,
  };
};

export const securityGuidanceSuccess = (payload) => ({
  type: CONST.SECURITYGUIDANCE_SUCCESS,
  payload,
});

export const securityGuidanceFail = (payload) => ({
  type: CONST.SECURITYGUIDANCE_FAIL,
  payload,
});
