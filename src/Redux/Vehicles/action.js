import * as CONST from "./constant";

export const vehicleTypes = (payload, callBack) => {
  return {
    type: CONST.VEHICLE_TYPE,
    payload,
    callBack,
  };
};

export const vehicleTypeSuccess = (payload) => ({
  type: CONST.VEHICLE_TYPE_SUCCESS,
  payload,
});

export const vehicleTypeFail = (payload) => ({
  type: CONST.VEHICLE_TYPE_FAIL,
  payload,
});

export const documentDriver = (payload, callBack) => {
  return {
    type: CONST.DOCUMENT_DRIVER,
    payload,
    callBack,
  };
};

export const documentDriverSuccess = (payload) => ({
  type: CONST.DOCUMENT_DRIVER_SUCCESS,
  payload,
});

export const documentDriverFail = (payload) => ({
  type: CONST.DOCUMENT_DRIVER_FAIL,
  payload,
});

export const driverRegister = (payload, callBack) => {
  return {
    type: CONST.REGISTER_DRIVER,
    payload,
    callBack,
  };
};

export const driverRegisterSuccess = (payload) => ({
  type: CONST.REGISTER_DRIVER_SUCCESS,
  payload,
});

export const driverRegisterFail = (payload) => ({
  type: CONST.REGISTER_DRIVER_FAIL,
  payload,
});

export const getService = (payload, callBack) => {
  return {
    type: CONST.GET_SERVICE_PROVIDER,
    payload,
    callBack,
  };
};

export const getServiceSuccess = (payload) => ({
  type: CONST.GET_SERVICE_PROVIDER_SUCCESS,
  payload,
});

export const getServiceFail = (payload) => ({
  type: CONST.GET_SERVICE_PROVIDER_FAIL,
  payload,
});

export const jobApplication = (payload, callBack) => {
  return {
    type: CONST.JOBAPPLICATION,
    payload,
    callBack,
  };
};

export const jobApplicationSuccess = (payload) => ({
  type: CONST.JOBAPPLICATION_SUCCESS,
  payload,
});

export const jobApplicationFail = (payload) => ({
  type: CONST.JOBAPPLICATION_FAIL,
  payload,
});