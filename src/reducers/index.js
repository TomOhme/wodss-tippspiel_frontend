import { combineReducers } from 'redux';
import { localeReducer } from 'react-localize-redux';
import counter from './counter';

const betApp = combineReducers({
    counter: counter,
    locale: localeReducer
})

export default betApp;
