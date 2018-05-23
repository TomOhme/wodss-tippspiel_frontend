import _ from 'underscore';

const initialState = [];

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