import * as CONST from "./constant";

const intialState = {
  data: [],
  blogdetails: [],
  careerDetails: [],
  error: null,
};

const BlogReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case CONST.BLOG_LIST_SUCCESS:
      return {
        ...state,
        data: payload,
        error: null,
      };
    case CONST.BLOG_LIST_FAIL:
      return {
        ...state,
        error: payload,
      };

    case CONST.BLOG_DETAIL_SUCCESS:
      return {
        ...state,
        blogdetails: { ...payload },
        error: null,
      };
    case CONST.BLOG_DETAIL_FAIL:
      return {
        ...state,
        error: payload,
      };
    case CONST.CAREER_DETAIL_SUCCESS:
      return {
        ...state,
        careerDetails: { ...payload },
        error: null,
      };
    case CONST.CAREER_DETAIL_FAIL:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
      break;
  }
};

export default BlogReducer;
