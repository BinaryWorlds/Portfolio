import { ANIMATE_MEET_ME, SET_PAGE, SET_PAGE_UNMOUNTED } from './actionTypes';

const reducer = (state = [], action) => {
  switch (action.type) {
    case ANIMATE_MEET_ME:
      return { ...state, animateMeetMe: action.payload };
    case SET_PAGE:
      return { ...state, pageId: action.payload, isPageMounted: true };
    case SET_PAGE_UNMOUNTED:
      return { ...state, isPageMounted: false };

    default:
      return state;
  }
};

export default reducer;
