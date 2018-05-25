import _ from 'underscore';

import initialGames from '../data/games.json';

function initializeGamesWithBets(initialGames) {
    var state = formatGames(initialGames);
    state = addBetsToGames([], state);
    return state;
}

const betReducer = (state = initializeGamesWithBets(initialGames), action) => {
    var newState = Object.assign({}, state);
    var newGame;

    switch (action.type) {
        case 'SETSCORE':
            var newVal = action.event.target.value;

            // check that value >= 0
            if (newVal < 0) {
                return state;
            }

            newGame = _.findWhere(newState[action.round], {
                game_id: action.id
            });

            if (action.team === 'home') {
                newGame.bet.bettedHomeTeamGoals = newVal;
            } else if (action.team === 'away') {
                newGame.bet.bettedAwayTeamGoals = newVal;
            } else {
                return state; // wrong team
            }

            newGame.saved = false;

            return newState;
        case 'SAVESUCCESS':
            // set saved to true when update on server was successful
            newGame = _.findWhere(newState[action.round], {
                game_id: action.id
            });
            console.log(newGame);
            console.log(action.round);
            console.log(action.id);
            newGame.saved = true;

            return newState;
        case "GETGAMESSUCCESS":
            newState = formatGames(action.games);
            newState = addEmptyBetsToGames(newState);

            return newState;
        case "GETUSERBETSSUCCESS":
            newState = addBetsToGames(action.userbets, newState);
            return newState;
        default:
            return state;
    }
};

function formatGames(games) {
    var newState = {};
    newState.A = [];
    newState.B = [];
    newState.C = [];
    newState.D = [];
    newState.E = [];
    newState.F = [];
    newState.G = [];
    newState.H = [];
    newState.ro16 = [];
    newState.ro8 = [];
    newState.semifinals = [];
    newState.finals = [];

    newState.gamesById = {}

    _.each(games, (game) => {
        game.saved = true;
        game.finished = game.homeTeamGoals !== null;

        // push games into correct arrays, e.g. A or ro16...
        if (game.phaseName === "group") {
            newState[game.tournamentgroup].push(game);
        } // TODO maybe sort for date/time?
        else if (game.phaseName === "gameforthird") {
            newState["finals"].push(game);
        } else {
            newState[game.phaseName].push(game);
        }

    });

    return newState;
}

const betBase = {
    betExistsOnServer: false,
    id: -1,
    user_id: -1,
    game_id: -1,
    username: "",
    homeTeam_id: -1,
    awayTeamId: -1,
    bettedHomeTeamGoals: 0,
    bettedAwayTeamGoals: 0,
    actualHomeTeamGoals: 0,
    actualAwayTeamGoals: 0,
    score: 0,
    location: "",
    phase: ""
}

function addBetsToGames(userbets, newState) {
    // add all bets from server
    _.each(userbets, (bet) => {
        _.each(newState, (phase) => {
            _.each(phase, (game) => {
                if (bet.game_id === game.game_id) {
                    // TODO other values
                    bet.betExistsOnServer = true;
                    bet.game_id = game.game_id;
                    game.bet = bet;
                }
            })
        })
    })


    // add empty bets for all other games
    newState = addEmptyBetsToGames(newState);

    return newState;
}

function addEmptyBetsToGames(newState) {
    _.each(newState, (phase) => {
        _.each(phase, (game) => {
            if (game.bet === undefined) {
                game.bet = Object.assign({}, betBase);
            }
        })
    })
    return newState;
}

export default betReducer;