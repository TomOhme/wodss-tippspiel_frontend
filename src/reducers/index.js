import { combineReducers } from 'redux';
import { localeReducer } from 'react-localize-redux';
import betGroupReducer from './betGroupReducer';
import betReducer from './betReducer';

const betApp = combineReducers({
    group: betGroupReducer,
    bets: betReducer,
    locale: localeReducer
})

export default betApp;
