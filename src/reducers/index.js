import { combineReducers } from 'redux';
import { localeReducer } from 'react-localize-redux';
import betRoundReducer from './betRoundReducer';
import betReducer from './betReducer';
import playerScoreBoardReducer from './playerScoreBoardReducer';

const betApp = combineReducers({
    round: betRoundReducer,
    bets: betReducer,
    playerScores:  playerScoreBoardReducer,
    locale: localeReducer
})

export default betApp;
