import * as CONST from "./constant";

export const termCondition = (payload, callBack) => {
  return {
    type: CONST.TERMCONDITION,
    payload: { ...payload },
    callBack,
  };
};

export const termConditionSuccess = (payload) => ({
  type: CONST.TERMCONDITION_SUCCESS,
  payload,
});

export const termConditionFail = (payload) => ({
  type: CONST.TERMCONDITION_FAIL,
  payload,
});
