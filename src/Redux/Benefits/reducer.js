import * as CONST from "./constant";

const intialState = {
  data: {},
  error: null,
};

const benefitsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case CONST.BENEFITS_SUCCESS:
      return {
        ...state,
        data: { ...payload },
        error: null,
      };
    case CONST.BENEFITS_FAIL:
      return {
        ...state,
        error: payload,
      };

    default:
      return state;
      break;
  }
};

export default benefitsReducer;
