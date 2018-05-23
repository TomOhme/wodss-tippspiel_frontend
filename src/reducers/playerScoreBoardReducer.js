import _ from 'underscore';

const initialState = [
    {
        id: 1,
        rank: 1,
        name: "hase",
        score: 888
    },
    {
        id: 2,
        rank: 2,
        name: "hase",
        name: "maulwurf",
        score: 555
    },
    {
        id: 3,
        rank: 3,
        name: "zebra",
        score: 222
    }
];

const playerScoreBoardReducer = (state = initialState, action) => {
    var newState = Object.assign({}, state);

    switch (action.type) {
        case "GETPLAYERRANKINGSUCCESS":
            var newPlayerRanking = action.playerRanking;
            _.each(newPlayerRanking, (player) => {
                player.rank = _.indexOf(newPlayerRanking, player) + 1;
            });
            newState = newPlayerRanking;
            return newState;
        default:
            return state;
    }
};

export default playerScoreBoardReducer;