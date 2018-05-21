import _ from 'underscore';

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
import semi from '../data/semi.json';
import finals from '../data/finals.json';

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
    "semi": semi,
    "finals": finals
};

const betReducer = (state = initialState, action) => {
    var newState = Object.assign({}, state);

    switch (action.type) {
        case 'SETSCORE':
            /*
            console.log(action.event.target.value);
            console.log(action.team);
            console.log(action.id);
            */
            var newVal = action.event.target.value;

            // check that value >= 0
            if (newVal < 0) {
                return state;
            }

            var newGame = _.findWhere(newState[action.round], {id: action.id});

            if (action.team === 'home') {
                newGame.home.bet = newVal; // TODO
            } else if (action.team === 'guest') {
                newGame.guest.bet = newVal; // TODO
            } else {
                return state; // wrong team
            }

            //newState[action.round]

            // set saved to false
            // TODO
            newGame.saved = false;

            console.log(newGame);

            return newState;
        case 'SAVE':
            // TODO
            // set saved to true when UPDATE was successful
            newState[action.id].saved = true;
            return newState;
        default:
            return state;
    }
};

export default betReducer;