import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import App from './components/App'
import appReducer from './reducers';
import './index.css';
import { initialize } from 'react-localize-redux';
import { addTranslation } from 'react-localize-redux';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import thunk from 'redux-thunk';
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import _ from 'underscore';

// FOR DEVELOPMENT TESTS
document._ = _;

// REDUX-PERSIST
const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, appReducer)

// REDUX
const history = createHistory()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  persistedReducer,
  composeEnhancers(
    applyMiddleware(thunk, routerMiddleware(history))
  ),
  //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// persist the created store
let persistor = persistStore(store);

// LANGUAGE SUPPORT
const languages = [
  { name: 'German', code: 'de' }
]
store.dispatch(initialize(languages, { defaultLanguage: 'de' }));

const localejson = require('./data/locale.json');
store.dispatch(addTranslation(localejson));

// make store available in all container components through Provider
render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedRouter history={history}>{/* enables dispatch(push("/path")) in actions */}
        <App />
      </ConnectedRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)