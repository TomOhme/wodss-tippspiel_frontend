const initialState = [];

const groupScoreBoardReducer = (state = initialState, action) => {
    var newState = Object.assign({}, state);

    switch (action.type) {
        case "GETGROUPRANKINGSUCCESS":
            newState = action.groupRanking;
            return newState;
        default:
            return state;
    }
};

export default groupScoreBoardReducer;