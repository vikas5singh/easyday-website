import * as CONST from "./constant";

export const aboutUs = (payload, callBack) => {
  return {
    type: CONST.ABOUT,
    payload: { ...payload },
    callBack,
  };
};

export const aboutUsSuccess = (payload) => ({
  type: CONST.ABOUT_SUCCESS,
  payload,
});

export const aboutUsFail = (payload) => ({
  type: CONST.ABOUT_FAIL,
  payload,
});
