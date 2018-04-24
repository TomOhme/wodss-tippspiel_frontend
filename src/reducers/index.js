import { combineReducers } from 'redux';
import { localeReducer } from 'react-localize-redux';
import betRoundReducer from './betRoundReducer';
import betGroupsReducer from './betGroupsReducer';
import betReducer from './betReducer';
import playerScoreBoardReducer from './playerScoreBoardReducer';
import groupScoreBoardReducer from './groupScoreBoardReducer';
import userReducer from './userReducer';

const betApp = combineReducers({
    round: betRoundReducer,
    betGroups: betGroupsReducer,
    bets: betReducer,
    playerScores:  playerScoreBoardReducer,
    groupScores:  groupScoreBoardReducer,
    user:  userReducer,
    locale: localeReducer
})

export default betApp;
