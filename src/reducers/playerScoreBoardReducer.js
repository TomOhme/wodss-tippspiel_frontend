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

            // equalize rank when users have same scores
            for (var i = 0; i < newPlayerRanking.lengthi; i++) {
                var firstPlayer = newPlayerRanking[i]
                var secondPlayer = newPlayerRanking[i+1]
                if (secondPlayer !== undefined 
                    && firstPlayer.score === secondPlayer.score) {
                    secondPlayer.rank = firstPlayer.rank;
                }
            }

            newState = newPlayerRanking;
            return newState;
        default:
            return state;
    }
};

export default playerScoreBoardReducer;