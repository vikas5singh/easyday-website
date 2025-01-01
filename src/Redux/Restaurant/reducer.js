import { productDetail } from "../actions";
import * as CONST from "./constant";

const intialState = {
  data: {},
  dataDetails: {},
  id: null,
  error: null,
  latLng: {},
  tabData: [],
  product: [],
  homeData: [],
  homePage: [],
  productDetails: {},
};

const NearbyRestaurantReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case CONST.NEARBY_RESTAURANT_SUCCESS:
      return {
        ...state,
        id: payload._id,
        data: { ...payload },
        error: null,
      };
    case CONST.NEARBY_RESTAURANT_FAIL:
      return {
        ...state,
        error: payload,
      };
    /////======================COllection Tab==============///////

    case CONST.COLLECTION_TAB_SUCCESS:
      return {
        ...state,
        id: payload._id,
        tabData: payload,
        error: null,
      };
    case CONST.COLLECTION_TAB_FAIL:
      return {
        ...state,
        error: payload,
      };

    // ============== restaurant detail ========= //

    case CONST.RESTAURANT_DETAIL_SUCCESS:
      return {
        ...state,
        id: payload._id,
        dataDetails: { ...payload },
        error: null,
      };
    case CONST.RESTAURANT_DETAIL_FAIL:
      return {
        ...state,
        error: payload,
      };

    case CONST.FRESH_MARKET_DETAIL_SUCCESS:
      return {
        ...state,
        freshMarketData: payload,
        error: null,
      };

    case CONST.FRESH_MARKET_DETAIL_FAIL:
      return {
        ...state,
        error: payload,
      }

    case CONST.GET_PRODUCT_SUCCESS:
      return {
        ...state,
        product: { ...payload },
        error: null,
      };

    case CONST.GET_PRODUCT_FAIL:
      return {
        ...state,
        error: payload,
      }
    case CONST.GET_HOME_SUCCESS:
      return {
        ...state,
        homeData: payload,
        error: null,
      };

    case CONST.GET_HOME_FAIL:
      return {
        ...state,
        error: payload,
      }
    case CONST.GET_HOME_PAGE_SUCCESS:
      return {
        ...state,
        homePage: payload,
        error: null,
      };

    case CONST.GET_HOME_PAGE_FAIL:
      return {
        ...state,
        error: payload,
      }

    case CONST.PRODUCT_DETAILS_SUCCESS:
      return {
        ...state,
        productDetail: payload,
        error: null,
      };

    case CONST.PRODUCT_DETAILS_FAIL:
      return {
        ...state,
        error: payload,
      }

    // ============== lat lng ========= //

    case CONST.LAT_LNG:
      return {
        ...state,
        latLng: { ...payload },
        error: null,
      };

    default:
      return state;
      break;
  }
};

export default NearbyRestaurantReducer;
