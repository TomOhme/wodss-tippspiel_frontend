const initialState = {
    "0": {
        saved: true,
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
        winner: "TBD",
        homegoals: "3",
        guestgoals: "1",
        difference: "2",
        total: "5"
    },
    "1": {
        saved: true,
        home: {
            name: "kor",
            bet: 0
        },
        guest: {
            name: "fra",
            bet: 0
        },
        date: "22.6.",
        time: "21:00",
        place: "sot",
        winner: "TBD",
        homegoals: "0",
        guestgoals: "0",
        difference: "0",
        total: "0"
    }
};

const betReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SETSCORE':
            /*
            console.log(action.event.target.value);
            console.log(action.team);
            console.log(action.id);
            */
            var newState = Object.assign({}, state);

            var newVal = action.event.target.value;

            // check that value >= 0
            if (newVal < 0) {
                return state;
            }

            if (action.team === 'home') {
                newState[action.id].home.bet = newVal;
            }
            else if (action.team === 'guest') {
                newState[action.id].guest.bet = newVal;
            }
            else {
                return state; // wrong team
            }

            // set saved to false
            // TODO
            newState[action.id].saved = false;

            return newState;
        case 'SAVE':
            // TODO
            // set saved to true when UPDATE was successful
            return state;
        default:
            return state;
    }
};

export default betReducer;