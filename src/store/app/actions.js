import { TOGGLE_MENU, UPDATE_MOBILE, LOAD_MORE } from './types';

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
