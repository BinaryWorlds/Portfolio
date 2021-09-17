import { TOGGLE_MENU, UPDATE_MOBILE, LOAD_MORE, UDPATE_COOKIES_STATE } from './types';

export const toggleMenu = () => ({
  type: TOGGLE_MENU,
});

export const updateIsMobile = (isMobile) => ({
  type: UPDATE_MOBILE,
  payload: isMobile,
});

export const loadMore = () => ({
  type: LOAD_MORE,
});

export const updateCookiesState = (isAllowed) => ({
  type: UDPATE_COOKIES_STATE,
  payload: isAllowed,
});
