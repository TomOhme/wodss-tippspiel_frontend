import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './components/App'
import betApp from './reducers';
import './index.css';

const store = createStore(
  betApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

{/* make store available in all container components through Provider */ }
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)