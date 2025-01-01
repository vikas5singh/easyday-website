import * as CONST from "./constant";

const intialState = {
  data: {},
  error: null,
};

const refundPolicyReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case CONST.REFUNDPOLICY_SUCCESS:
      return {
        ...state,
        data: { ...payload },
        error: null,
      };
    case CONST.REFUNDPOLICY_FAIL:
      return {
        ...state,
        error: payload,
      };

    default:
      return state;
      break;
  }
};

export default refundPolicyReducer;
