import {
  SET_PAGE,
  APPLY_TAG_FILTER,
  HOME_PAGE_LOADED,
  HOME_PAGE_UNLOADED,
  RANDOM_TWEET,
  SEARCH_TWEET,
  RESET,
  CHANGE_TAB,
  PROFILE_PAGE_LOADED,
  PROFILE_PAGE_UNLOADED,
  PROFILE_FAVORITES_PAGE_LOADED,
  PROFILE_FAVORITES_PAGE_UNLOADED
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
      tweets: action.payload.tweets
    };
    case APPLY_TAG_FILTER:
      return {
        ...state,
        tweets: action.payload.tweets,
        tag: action.tag,
        currentPage: 1
      };
    case HOME_PAGE_LOADED:
      return {
        ...state,
        tweets: action.payload[1].tweets,
      };
    case RESET:
      return {
        ...state,
        tweets: action.payload.tweets,
      };
    case HOME_PAGE_UNLOADED:
      return {};
    case CHANGE_TAB:
      return {
        ...state,
        tweets: action.payload.tweets,
        currentPage: 1
      };
    case PROFILE_PAGE_LOADED:
    case PROFILE_FAVORITES_PAGE_LOADED:
      return {
        ...state,
        tweets: action.payload[1].tweets,
        currentPage: 1
      };
    case PROFILE_PAGE_UNLOADED:
    case PROFILE_FAVORITES_PAGE_UNLOADED:
      return {};
    default:
      return state;
  }
};
