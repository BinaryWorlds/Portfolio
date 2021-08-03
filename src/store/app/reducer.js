import { TOGGLE_MENU } from './types';

const initialState = { isMenuOpen: false };

export default (state = initialState, { type }) => {
  switch (type) {
    case TOGGLE_MENU:
      return { ...state, isMenuOpen: !state.isMenuOpen };

    default:
      return state;
  }
};
