import * as CONST from "./constant";

const intialState = {
  data: {},
  error: null,
};

const AboutUsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case CONST.ABOUT_SUCCESS:
      return {
        ...state,
        data: { ...payload },
        error: null,
      };
    case CONST.ABOUT_FAIL:
      return {
        ...state,
        error: payload,
      };

    default:
      return state;
      break;
  }
};

export default AboutUsReducer;
