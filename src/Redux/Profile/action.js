import * as CONST from "./constant";

export const getProfile = (payload) => {
  return {
    type: CONST.GET_PROFILE,
    payload: { ...payload },
  };
};

export const getProfileSuccess = (payload) => ({
  type: CONST.GET_PROFILE_SUCCESS,
  payload,
});

export const getProfileFail = (payload) => ({
  type: CONST.GET_PROFILE_FAIL,
  payload,
});

// ======= edit profile ========= //

export const editProfile = (payload, callBack) => {
  return {
    type: CONST.EDIT_PROFILE,
    payload: { ...payload },
    callBack,
  };
};

export const editProfileSuccess = (payload) => ({
  type: CONST.EDIT_PROFILE_SUCCESS,
  payload,
});

export const editProfileFail = (payload) => ({
  type: CONST.EDIT_PROFILE_FAIL,
  payload,
});

// ======= edit profile ========= //

export const updateProfileImage = (payload, callBack) => {

  return {
    type: CONST.UPDATE_PROFILE_IMAGE,
    payload: payload,
    callBack,
  };
};

export const updateProfileImageSuccess = (payload) => ({
  type: CONST.UPDATE_PROFILE_IMAGE_SUCCESS,
  payload,
});

export const updateProfileImageFail = (payload) => ({
  type: CONST.UPDATE_PROFILE_IMAGE_FAIL,
  payload,
});

// ======= edit profile ========= //

export const getInTouch = (payload, callBack) => {

  return {
    type: CONST.GET_IN_TOUCH,
    payload: payload,
    callBack,
  };
};

export const getInTouchSuccess = (payload) => ({
  type: CONST.GET_IN_TOUCH_SUCCESS,
  payload,
});

export const getInTouchFail = (payload) => ({
  type: CONST.GET_IN_TOUCH_FAIL,
  payload,
});
