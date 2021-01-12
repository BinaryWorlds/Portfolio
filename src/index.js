import 'core-js';
import 'raf/polyfill';
import 'regenerator-runtime/runtime';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import StoreProvider from './globalState/store';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById('root'),
);

serviceWorkerRegistration.register();
