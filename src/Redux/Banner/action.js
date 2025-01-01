import * as CONST from "./constant";

export const getBanner = (payload) => {
  return {
    type: CONST.GET_BANNER,
    payload: { ...payload },
  };
};

export const getBannerSuccess = (payload) => ({
  type: CONST.GET_BANNER_SUCCESS,
  payload,
});

export const getBannerFail = (payload) => ({
  type: CONST.GET_BANNER_FAIL,
  payload,
});
