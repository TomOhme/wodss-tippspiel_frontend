import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import App from './components/App'
import betApp from './reducers';
import './index.css';
import { initialize } from 'react-localize-redux';
import { addTranslation } from 'react-localize-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import thunk from 'redux-thunk';

{/* REDUX */ }
const history = createHistory()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  betApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  composeEnhancers(
    applyMiddleware(thunk, routerMiddleware(history))
  )
);

{/* LANGUAGE SUPPORT */ }
const languages = [
  { name: 'German', code: 'de' }
]
store.dispatch(initialize(languages, { defaultLanguage: 'de' }));

const localejson = require('./data/locale.json');
store.dispatch(addTranslation(localejson));

{/* make store available in all container components through Provider */ }
render(
  <Provider store={store}>
    {/* enables dispatch(push("/path")) in actions */ }
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)