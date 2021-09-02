import { TOGGLE_MENU, UPDATE_MOBILE } from './types';

const initialState = { isMenuOpen: false, isMobile: null };

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case TOGGLE_MENU:
      return { ...state, isMenuOpen: !state.isMenuOpen };

    case UPDATE_MOBILE:
      return { ...state, isMobile: payload };

    default:
      return state;
  }
};
