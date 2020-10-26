import {
  ANIMATE_MEET_ME,
  SET_PAGE,
  SET_PAGE_UNMOUNTED,
  SET_LANG,
  TOGGLE_MENU,
} from './actionTypes';

const reducer = (state = [], action) => {
  switch (action.type) {
    case ANIMATE_MEET_ME:
      return { ...state, animateMeetMe: action.payload };
    case SET_PAGE:
      return {
        ...state,
        pageId: +action.payload,
        isPageMounted: true,
        isMenuOpen: false,
      };
    case SET_PAGE_UNMOUNTED:
      return { ...state, isPageMounted: false };
    case SET_LANG:
      return { ...state, lang: action.payload };
    case TOGGLE_MENU:
      return { ...state, isMenuOpen: !state.isMenuOpen };
    default:
      return state;
  }
};

export default reducer;
