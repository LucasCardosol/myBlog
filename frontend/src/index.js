import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';
import { Provider } from 'react-redux'
import store from './store';
import GlobalStyle from './GlobalStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <GlobalStyle />
    <Router />
  </Provider>
);



