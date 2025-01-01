import * as CONST from "./constant";

export const contactUs = (payload, callBack) => {
  return {
    type: CONST.CONTACTUS,
    payload: { ...payload },
    callBack,
  };
};

export const contactUsSuccess = (payload) => ({
  type: CONST.CONTACTUS_SUCCESS,
  payload,
});

export const contactUsFail = (payload) => ({
  type: CONST.CONTACTUS_FAIL,
  payload,
});
