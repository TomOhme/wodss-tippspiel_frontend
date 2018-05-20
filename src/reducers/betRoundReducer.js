const initialState = {
    currentRound: "A",
};

const betRoundReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SETCURRENTROUND':
            state.currentRound = action.round;
            return state;
        default:
            return state;
    }
};

export default betRoundReducer;