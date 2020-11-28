import {
  ANIMATE_MEET_ME,
  SET_PAGE,
  SET_PAGE_UNMOUNTED,
  SET_LANG,
  TOGGLE_MENU,
  SET_VIEW,
} from './actionTypes';

const reducer = (state = [], action) => {
  switch (action.type) {
    case ANIMATE_MEET_ME:
      return { ...state, animateMeetMe: action.payload };
    case SET_PAGE:
      return {
        ...state,
        pageId: +action.payload,
        isPageUnmounted: false,
        isMenuOpen: false,
      };
    case SET_PAGE_UNMOUNTED:
      return { ...state, isPageUnmounted: true };
    case SET_LANG:
      return { ...state, lang: action.payload };
    case TOGGLE_MENU:
      return { ...state, isMenuOpen: !state.isMenuOpen };
    case SET_VIEW:
      return { ...state, isMobile: action.payload };
    default:
      return state;
  }
};

export default reducer;
