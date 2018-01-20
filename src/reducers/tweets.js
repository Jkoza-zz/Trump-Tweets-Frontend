import {
  SET_PAGE,
  APPLY_TAG_FILTER,
  HOME_PAGE_LOADED,
  HOME_PAGE_UNLOADED,
  RANDOM_TWEET,
  SEARCH_TWEET,
  RESET,
  CHANGE_TAB
} from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case SET_PAGE:
      return {
        ...state,
        tweets: action.payload.tweets,
        currentPage: action.page
      };
    case RANDOM_TWEET:
    return {
      ...state,
      tweets: action.payload.tweets
    };
    case SEARCH_TWEET:
    return {
      ...state,
      pager: action.pager,
      tweets: action.payload.tweets,
      currentPage: 0
    };
    case APPLY_TAG_FILTER:
      return {
        ...state,
        pager: action.pager,
        tweets: action.payload.tweets,
        tag: action.tag,
        currentPage: 0
      };
    case HOME_PAGE_LOADED:
      return {
        ...state,
        currentPage: 0,
        pager: action.pager,
        tweets: action.payload[1].tweets,
      };
    case RESET:
      return {
        ...state,
        pager: action.pager,
        currentPage: 0,
        tweets: action.payload.tweets,
      };
    case HOME_PAGE_UNLOADED:
      return {};
    case CHANGE_TAB:
      return {
        ...state,
        pager: action.pager,
        tweets: action.payload.tweets,
        currentPage: 1
      };
    default:
      return state;
  }
};
