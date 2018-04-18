import { combineReducers } from 'redux';
import { localeReducer } from 'react-localize-redux';
import groupReducer from './groupReducer';
import betReducer from './betReducer';

const betApp = combineReducers({
    group: groupReducer,
    bets: betReducer,
    locale: localeReducer
})

export default betApp;
