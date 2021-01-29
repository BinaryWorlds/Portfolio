// import 'core-js'; // legacy
// import 'raf/polyfill'; // legacy
// import 'regenerator-runtime/runtime'; // legacy

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
