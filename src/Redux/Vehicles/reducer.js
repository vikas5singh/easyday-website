import * as CONST from "./constant";

const intialState = {
  data: {},
  error: null,
  vehicleTypes: null,
  document: [],
  driverData: null,
  serviceList: [],
};

const VehiclesReducer = (state = intialState, { type, payload }) => {
  console.log("pakka", payload);
  switch (type) {
    case CONST.VEHICLE_TYPE_SUCCESS:
      return {
        ...state,
        vehicleTypes: payload.data,
        error: null,
      };
    case CONST.VEHICLE_TYPE_FAIL:
      return {
        ...state,
        error: payload,
      };
    case CONST.DOCUMENT_DRIVER_SUCCESS:
      return {
        ...state,
        document: payload.data,
        error: null,
      };
    case CONST.DOCUMENT_DRIVER_FAIL:
      return {
        ...state,
        error: payload,
      };
    case CONST.REGISTER_DRIVER_SUCCESS:
      return {
        ...state,
        driverData: payload.data,
        error: null,
      };
    case CONST.REGISTER_DRIVER_FAIL:
      return {
        ...state,
        error: payload,
      };
    case CONST.GET_SERVICE_PROVIDER_SUCCESS:
      return {
        ...state,
        serviceList: payload.data,
        error: null,
      };
    case CONST.GET_SERVICE_PROVIDER_FAIL:
      return {
        ...state,
        error: payload,
      };
    case CONST.JOBAPPLICATION_SUCCESS:
      return {
        ...state,
        driverData: payload.data,
        error: null,
      };
    case CONST.JOBAPPLICATION_FAIL:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
      break;
  }
};

export default VehiclesReducer;
