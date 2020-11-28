import React, { createContext, useContext, useReducer } from 'react';
import reducer from './reducer';

const initialState = {
  animateMeetMe: false,
  pageId: 0,
  lang: 'pl',
  isPageUnmounted: true,
  isMenuOpen: false,
  isMobile: null,
};
const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
export default StoreProvider;
