import { TOGGLE_MENU, UPDATE_MOBILE, LOAD_MORE, UDPATE_COOKIES_STATE } from './types';

const initialState = { isMenuOpen: false, isMobile: null, loadMore: false, isCookiesAllowed: null };

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case TOGGLE_MENU:
      return { ...state, isMenuOpen: !state.isMenuOpen };

    case UPDATE_MOBILE:
      return { ...state, isMobile: payload };

    case LOAD_MORE:
      return { ...state, loadMore: true };

    case UDPATE_COOKIES_STATE:
      return { ...state, isCookiesAllowed: payload };

    default:
      return state;
  }
};
