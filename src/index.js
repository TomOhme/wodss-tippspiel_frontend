import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './components/App'
import betApp from './reducers';
import './index.css';
import { initialize } from 'react-localize-redux';

{/* REDUX */}
const store = createStore(
  betApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

{/* LANGUAGE SUPPORT */}
const languages = [
  { name: 'German', code: 'de' }
]
store.dispatch(initialize(languages));

{/* make store available in all container components through Provider */ }
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)