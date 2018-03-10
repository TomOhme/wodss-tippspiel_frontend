import { combineReducers } from 'redux';
import { localeReducer } from 'react-localize-redux';
import groupReducer from './groupReducer';

const betApp = combineReducers({
    group: groupReducer,
    locale: localeReducer
})

export default betApp;
