import * as CONST from "./constant";

const intialState = {
  data: {},
  error: null,
};

const securityGuidanceReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case CONST.SECURITYGUIDANCE_SUCCESS:
      return {
        ...state,
        data: { ...payload },
        error: null,
      };
    case CONST.SECURITYGUIDANCE_FAIL:
      return {
        ...state,
        error: payload,
      };

    default:
      return state;
      break;
  }
};

export default securityGuidanceReducer;
