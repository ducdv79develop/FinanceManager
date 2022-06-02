import 'react-app-polyfill/stable';
import 'core-js';
import React from 'react';
import ReactDOM from 'react-dom';
import { CookiesProvider } from 'react-cookie';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
    <React.StrictMode>
      <CookiesProvider>
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      </CookiesProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
