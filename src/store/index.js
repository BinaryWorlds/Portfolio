import { createStore, combineReducers } from 'redux';

import appReducer from './app/reducer';

const reducers = combineReducers({
  app: appReducer,
});

const store = createStore(reducers);

export default store;
