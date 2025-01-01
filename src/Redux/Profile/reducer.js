import * as CONST from "./constant";

const intialState = {
  user: {},
  profile: {},
  editProfile: {},
  id: null,
  error: null,
};

const ProfileReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case CONST.GET_PROFILE_SUCCESS:
      return {
        ...state,
        profile: { ...payload },
        error: null,
      };
    case CONST.GET_PROFILE_FAIL:
      return {
        ...state,
        error: payload,
      };

    case CONST.EDIT_PROFILE_SUCCESS:
      return {
        ...state,
        editProfile: { ...payload },
        error: null,
      };
    case CONST.EDIT_PROFILE_FAIL:
      return {
        ...state,
        error: payload,
      };

    case CONST.GET_IN_TOUCH_SUCCESS:
      return {
        ...state,
        editProfile: { ...payload },
        error: null,
      };
    case CONST.GET_IN_TOUCH_SUCCESS:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
      break;
  }
};

export default ProfileReducer;
