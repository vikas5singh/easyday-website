import * as CONST from "./constant";

const intialState = {
  data: {},
  error: null,
};

const PrivacyReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case CONST.PRIVACY_POLICY_SUCCESS:
      return {
        ...state,
        data: { ...payload },
        error: null,
      };
    case CONST.PRIVACY_POLICY_FAIL:
      return {
        ...state,
        error: payload,
      };

    default:
      return state;
      break;
  }
};

export default PrivacyReducer;
