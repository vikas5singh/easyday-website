import * as CONST from "./constant";

const intialState = {
  data: {},
  error: null,
};

const constactUsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case CONST.CONTACTUS_SUCCESS:
      return {
        ...state,
        data: { ...payload },
        error: null,
      };
    case CONST.CONTACTUS_FAIL:
      return {
        ...state,
        error: payload,
      };

    default:
      return state;
      break;
  }
};

export default constactUsReducer;
