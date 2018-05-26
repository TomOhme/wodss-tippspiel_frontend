import _ from 'underscore';

const initialState = {
        started: true,
        homeWin: 74,
        draw: 13,
        homeLose: 25
};

const statisticsReducer = (state = initialState, action) => {
    var newState = Object.assign({}, state);

    switch (action.type) {
        case "GETBETSTATISTICSSUCCESS":
            newState = action.betStatistics;
            return newState;
        default:
            return state;
    }
};

export default statisticsReducer;