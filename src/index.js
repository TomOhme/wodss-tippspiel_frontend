import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import App from './components/App'
import betApp from './reducers';
import './index.css';
import { initialize } from 'react-localize-redux';
import { addTranslation } from 'react-localize-redux';
import { BrowserRouter } from 'react-router-dom'
import thunk from 'redux-thunk';

{/* REDUX */ }
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  betApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  composeEnhancers(
    applyMiddleware(thunk)
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
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)