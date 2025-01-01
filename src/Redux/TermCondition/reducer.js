import * as CONST from "./constant";

const intialState = {
  data: {},
  error: null,
};

const termConditionReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case CONST.TERMCONDITION_SUCCESS:
      return {
        ...state,
        data: { ...payload },
        error: null,
      };
    case CONST.TERMCONDITION_FAIL:
      return {
        ...state,
        error: payload,
      };

    default:
      return state;
      break;
  }
};

export default termConditionReducer;
