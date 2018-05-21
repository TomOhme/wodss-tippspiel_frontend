const initialState = [
    {
        id: 1,
        name: "hase",
        points: 888
    },
    {
        id: 2,
        name: "maulwurf",
        points: 555
    },
    {
        id: 3,
        name: "zebra",
        points: 222
    }
];

const playerScoreBoardReducer = (state = initialState, action) => {
    var newState = Object.assign({}, state);

    switch (action.type) {
        case "GETPLAYERRANKINGSUCCESS":
            console.log(action.playerRanking);
            newState = action.playerRanking;
            return newState;
        default:
            return state;
    }
};

export default playerScoreBoardReducer;