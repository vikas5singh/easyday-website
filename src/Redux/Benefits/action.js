import * as CONST from "./constant";

export const benefits = (payload, callBack) => {
  return {
    type: CONST.BENEFITS,
    payload: { ...payload },
    callBack,
  };
};

export const benefitsSuccess = (payload) => ({
  type: CONST.BENEFITS_SUCCESS,
  payload,
});

export const benefitsFail = (payload) => ({
  type: CONST.BENEFITS_FAIL,
  payload,
});
