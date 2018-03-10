import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './components/App'
import betApp from './reducers';
import './index.css';
import { initialize } from 'react-localize-redux';
import { addTranslation } from 'react-localize-redux';
import { BrowserRouter } from 'react-router-dom'

{/* REDUX */ }
const store = createStore(
  betApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
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