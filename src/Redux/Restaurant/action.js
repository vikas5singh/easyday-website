import * as CONST from "./constant";

export const nearbyRestaurant = (payload, callBack) => {
  return {
    type: CONST.NEARBY_RESTAURANT,
    payload: { ...payload },
    callBack,
  };
};

export const nearbyRestaurantSuccess = (payload) => ({
  type: CONST.NEARBY_RESTAURANT_SUCCESS,
  payload,
});

export const nearbyRestaurantFail = (payload) => ({
  type: CONST.NEARBY_RESTAURANT_FAIL,
  payload,
});

//=================Collection Tab==============////

export const collectionTab = (payload, callBack) => {
  return {
    type: CONST.COLLECTION_TAB,
    payload: { ...payload },
    callBack,
  };
};

export const collectionTabSuccess = (payload) => ({
  type: CONST.COLLECTION_TAB_SUCCESS,
  payload,
});

export const collectionTabFail = (payload) => ({
  type: CONST.COLLECTION_TAB_FAIL,
  payload,
});

// ========== restaurant detail ============ //

export const restaurantDetail = (payload) => {
  return {
    type: CONST.RESTAURANT_DETAIL,
    payload: payload,
  };
};

export const restaurantDetailSuccess = (payload) => ({
  type: CONST.RESTAURANT_DETAIL_SUCCESS,
  payload,
});

export const restaurantDetailFail = (payload) => ({
  type: CONST.RESTAURANT_DETAIL_FAIL,
  payload,
});

// =========freshMarket Details =================//
export const freshMarkettDetail = (payload) => {
  return {
    type: CONST.FRESH_MARKET_DETAIL,
    payload: payload,
  };
};

export const freshMarkettDetailSuccess = (payload) => ({
  type: CONST.FRESH_MARKET_DETAIL_SUCCESS,
  payload,
});

export const freshMarkettDetailFail = (payload) => ({
  type: CONST.FRESH_MARKET_DETAIL_FAIL,
  payload,
});

// =============== LAT LNG ================== //

export const latLng = (payload) => {
  return {
    type: CONST.LAT_LNG,
    payload: payload,
  };
};


// ========== restaurant detail ============ //

export const getProduct = (payload, callBack,) => {
  return {
    type: CONST.GET_PRODUCT,
    payload: payload,
    callBack,
  };
};

export const getProductSuccess = (payload) => ({
  type: CONST.GET_PRODUCT_SUCCESS,
  payload,
});

export const getProductFail = (payload) => ({
  type: CONST.GET_PRODUCT_FAIL,
  payload,
});


// ========== restaurant detail ============ //

export const getHomeData = (payload) => {
  return {
    type: CONST.GET_HOME,
    payload: payload,
  };
};

export const getHomeDataSuccess = (payload) => ({
  type: CONST.GET_HOME_SUCCESS,
  payload,
});

export const getHomeDataFail = (payload) => ({
  type: CONST.GET_HOME_FAIL,
  payload,
});

export const getHomePage = (payload) => {
  return {
    type: CONST.GET_HOME_PAGE,
    payload: payload,
  };
};


export const getHomePageSuccess = (payload) => ({
  type: CONST.GET_HOME_PAGE_SUCCESS,
  payload,
});

export const getHomePageFail = (payload) => ({
  type: CONST.GET_HOME_PAGE_FAIL,
  payload,
});

export const getProductDetails = (payload, callBack) => {
  return {
    type: CONST.PRODUCT_DETAILS,
    payload: payload,
    callBack,
  };
};


export const getProductDetailsSuccess = (payload) => ({
  type: CONST.PRODUCT_DETAILS_SUCCESS,
  payload,
});

export const getProductDetailsFail = (payload) => ({
  type: CONST.PRODUCT_DETAILS_FAIL,
  payload,
});