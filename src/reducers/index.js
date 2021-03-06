import { combineReducers } from 'redux';
import { localeReducer } from 'react-localize-redux';
import betRoundReducer from './betRoundReducer';
import betGroupsReducer from './betGroupsReducer';
import betReducer from './betReducer';
import playerScoreBoardReducer from './playerScoreBoardReducer';
import groupScoreBoardReducer from './groupScoreBoardReducer';
import userReducer from './userReducer';
import { routerReducer } from 'react-router-redux'
import storage from 'redux-persist/lib/storage'
import { isLoadingReducer } from './isLoadingReducer';
import { notificationReducer } from './notificationReducer';
import statisticsReducer from './statisticsReducer';

const appReducer = combineReducers({
    round: betRoundReducer,
    betGroups: betGroupsReducer,
    bets: betReducer,
    playerScores: playerScoreBoardReducer,
    groupScores: groupScoreBoardReducer,
    user: userReducer,
    statistics: statisticsReducer,
    locale: localeReducer,
    router: routerReducer,
    isLoading: isLoadingReducer,
    notification: notificationReducer 
})

// introduce rootReducer for logout
const rootReducer = (state, action) => {

    if (action.type === "LOGOUT") {
        // clean persistance keys so redux-persist storage will wipe
        Object.keys(state).forEach(key => {
            storage.removeItem(`persist:${key}`);
        });

        // reset some states (don't reset state from external packages!) 
        state.round = undefined;
        //state.betGroups = undefined;
        state.bets = undefined;
        //state.playerScores = undefined;
        //state.groupScores = undefined;
        state.user = undefined;
        //state.isLoading = undefined;
        //state.notification = undefined;

        // delete all cookies
        document.cookie = ""; 
    }

    return appReducer(state, action)
}

export default rootReducer;
