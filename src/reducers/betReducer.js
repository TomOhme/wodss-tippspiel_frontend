import _ from 'underscore';

/*
import A from '../data/A.json';
import B from '../data/B.json';
import C from '../data/C.json';
import D from '../data/D.json';
import E from '../data/E.json';
import F from '../data/F.json';
import G from '../data/G.json';
import H from '../data/H.json';
import ro16 from '../data/ro16.json';
import ro8 from '../data/ro8.json';
import semifinals from '../data/semifinals.json';
import finals from '../data/finals.json';
*/
import initialGames from '../data/games.json';

const initialState = {
    /*
        0: {
            saved: true,
            finished: true,
            home: {
                name: "swi",
                bet: 3
            },
            guest: {
                name: "ger",
                bet: 4
            },
            date: "21.6.",
            time: "20:00",
            place: "kal",
            winner: "swi",
            homegoals: "3",
            guestgoals: "1",
            difference: "2",
            total: "5"
        },
    */
    /*
     "A": A,
     "B": B,
     "C": C,
     "D": D,
     "E": E,
     "F": F,
     "G": G,
     "H": H,
     "ro16": ro16,
     "ro8": ro8,
     "semifinals": semifinals,
     "finals": finals
     */
};

const betReducer = (state = formatGames(initialGames), action) => {
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
                id: action.id
            });

            if (action.team === 'home') {
                newGame.home.bet = newVal; // TODO
            } else if (action.team === 'guest') {
                newGame.guest.bet = newVal; // TODO
            } else {
                return state; // wrong team
            }

            newGame.saved = false;

            return newState;
        case 'SAVESUCCESS':
            // set saved to true when UPDATE was successful
            newGame = _.findWhere(newState[action.round], {
                id: action.id
            });
            newGame.saved = true;

            return newState;
        case "GETGAMESSUCCESS":
            newState = formatGames(action.games);
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

function addBetsToGames(userbets, newState) {
    // add all bets from server
    // TODO refactor with gameid / bet.game_id => use own dict, with flat games, key is id
    _.each(userbets, (bet) => {
        _.each(newState, (phase) => {
            _.each(phase, (game) => {
                if (bet.game_id === game.id) {
                    game.bet = bet;
                }
            })
        })
    })

    // add empty bets for all other games
    // TODO
    _.each(newState, (phase) => {
        _.each(phase, (game) => {
            if (game.bet === undefined) {
                // TODO
            }
        })
    })

    return newState;
}

export default betReducer;