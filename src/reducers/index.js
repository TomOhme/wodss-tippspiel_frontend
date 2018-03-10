import { combineReducers } from 'redux';
import counter from './counter';
import { localeReducer } from 'react-localize-redux';

const betApp = combineReducers({
    counter,
    locale: localeReducer
})

export default betApp;
