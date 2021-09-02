import { TOGGLE_MENU, UPDATE_MOBILE } from './types';

export const toggleMenu = () => ({
  type: TOGGLE_MENU,
});

export const updateIsMobile = (isMobile) => ({
  type: UPDATE_MOBILE,
  payload: isMobile,
});
