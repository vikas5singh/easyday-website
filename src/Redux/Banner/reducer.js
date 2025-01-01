import * as CONST from "./constant";

const intialState = {
  id: null,
  error: null,
  banner: []
};

const BannerReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case CONST.GET_BANNER_SUCCESS:
      return {
        ...state,
        banner: payload,
        error: null,
      };
    case CONST.GET_BANNER_FAIL:
      return {
        ...state,
        error: payload,
      };

    default:
      return state;
      break;
  }
};

export default BannerReducer;
