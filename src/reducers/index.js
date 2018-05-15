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

const appReducer = combineReducers({
    round: betRoundReducer,
    betGroups: betGroupsReducer,
    bets: betReducer,
    playerScores: playerScoreBoardReducer,
    groupScores: groupScoreBoardReducer,
    user: userReducer,
    locale: localeReducer,
    router: routerReducer,
    isLoading: isLoadingReducer
})

// introduce rootReducer for logout
const rootReducer = (state, action) => {

    if (action.type === "LOGOUT") {
        // clean persistance keys so redux-persist storage will wipe
        Object.keys(state).forEach(key => {
            console.log(key);
            storage.removeItem(`persist:${key}`);
        });

        // reset all state (except from external packages) 
        // so the user is logged out all application state is reinitialized
        state.round = undefined;
        state.betGroups = undefined;
        state.bets = undefined;
        state.playerScores = undefined;
        state.groupScores = undefined;
        state.user = undefined;
        state.isLoading = undefined;

        // reload page
        window.location.reload(true);

        // TODO redirect to bets?
    }

    return appReducer(state, action)
}

export default rootReducer;
