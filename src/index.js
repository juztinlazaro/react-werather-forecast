import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import 'rxjs';

import './assets/css/styles.css';
import 'antd/dist/antd.css';
import 'ubidy_ui_kit/css/main.css';
import 'flag-icon-css/css/flag-icon.css';

import App from './rootApp/App';
import rootReducer from './stores/reducers/rootReducers';
import rootEpic from './stores/actions/rootEpics';

import registerServiceWorker from './registerServiceWorker';

const composeEnhancers =
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const epicMiddlerware = createEpicMiddleware(rootEpic);

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(epicMiddlerware)),
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
