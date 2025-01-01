import * as CONST from "./constant";

export const blogList = (payload, callBack) => {
  return {
    type: CONST.BLOG_LIST,
    payload: payload,
    callBack,
  };
};

export const blogListSuccess = (payload) => ({
  type: CONST.BLOG_LIST_SUCCESS,
  payload,
});

export const blogListFail = (payload) => ({
  type: CONST.BLOG_LIST_FAIL,
  payload,
});

/////****************Blog Details******************////

export const blogDetail = (payload) => {
  return {
    type: CONST.BLOG_DETAIL,
    payload: payload,
  };
};

export const blogDetailSuccess = (payload) => ({
  type: CONST.BLOG_DETAIL_SUCCESS,
  payload,
});

export const blogDetailFail = (payload) => ({
  type: CONST.BLOG_DETAIL_FAIL,
  payload,
});


/////****************Career Details******************////

export const careerDetail = (payload) => {
  return {
    type: CONST.CAREER_DETAIL,
    payload: payload,
  };
};

export const careerDetailSuccess = (payload) => ({
  type: CONST.CAREER_DETAIL_SUCCESS,
  payload,
});

export const careerDetailFail = (payload) => ({
  type: CONST.CAREER_DETAIL_FAIL,
  payload,
});
