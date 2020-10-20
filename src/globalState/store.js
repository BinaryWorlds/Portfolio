import React, { createContext, useContext, useReducer } from 'react';
import reducer from './reducer';

const initialState = {
  animateMeetMe: false,
  pageId: 0,
  lang: 'pl',
  isPageMounted: false,
};
const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
