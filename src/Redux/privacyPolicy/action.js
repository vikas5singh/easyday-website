import * as CONST from "./constant";

export const privacyPolicy = (payload, callBack) => {
  return {
    type: CONST.PRIVACY_POLICY,
    payload: { ...payload },
    callBack,
  };
};

export const privacyPolicySuccess = (payload) => ({
  type: CONST.PRIVACY_POLICY_SUCCESS,
  payload,
});

export const privacyPolicyFail = (payload) => ({
  type: CONST.PRIVACY_POLICY_FAIL,
  payload,
});
