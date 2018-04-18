import { combineReducers } from 'redux';
import { localeReducer } from 'react-localize-redux';
import betGroupReducer from './betGroupReducer';
import betReducer from './betReducer';
import playerScoreBoardReducer from './playerScoreBoardReducer';

const betApp = combineReducers({
    group: betGroupReducer,
    bets: betReducer,
    playerScores:  playerScoreBoardReducer,
    locale: localeReducer
})

export default betApp;
