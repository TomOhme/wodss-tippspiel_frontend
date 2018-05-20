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
    1: {
        saved: true,
        finished: false,
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
        winner: "tbd",
        homegoals: "0",
        guestgoals: "0",
        difference: "0",
        total: "0"
    },
    */
    "A": [
        {
            id: 1,
            saved: true,
            finished: false,
            home: {
                name: "rus",
                bet: 0
            },
            guest: {
                name: "sau",
                bet: 0
            },
            date: "14.6.",
            time: "18:00",
            place: "mol"
        },
        {
            id: 2,
            saved: true,
            finished: false,
            home: {
                name: "egy",
                bet: 0
            },
            guest: {
                name: "uru",
                bet: 0
            },
            date: "15.6.",
            time: "14:00",
            place: "jek"
        },
        {
            id: 3,
            saved: true,
            finished: false,
            home: {
                name: "rus",
                bet: 0
            },
            guest: {
                name: "egy",
                bet: 0
            },
            date: "19.6.",
            time: "21:00",
            place: "san"
        },
        {
            id: 4,
            saved: true,
            finished: false,
            home: {
                name: "uru",
                bet: 0
            },
            guest: {
                name: "sau",
                bet: 0
            },
            date: "20.6.",
            time: "18:00",
            place: "ros"
        },
        {
            id: 5,
            saved: true,
            finished: false,
            home: {
                name: "uru",
                bet: 0
            },
            guest: {
                name: "rus",
                bet: 0
            },
            date: "25.6.",
            time: "16:00",
            place: "sam"
        },
        {
            id: 6,
            saved: true,
            finished: false,
            home: {
                name: "sau",
                bet: 0
            },
            guest: {
                name: "egy",
                bet: 0
            },
            date: "25.6.",
            time: "16:00",
            place: "wol"
        },
    ],
    "B": [
        {
            id: -1,
            saved: true,
            finished: false,
            home: {
                name: "egy",
                bet: 0
            },
            guest: {
                name: "uru",
                bet: 0
            },
            date: "15.6.",
            time: "14:00",
            place: "jek"
        }
    ],
    "C": [
    ],
    "D": [
    ],
    "E": [
    ],
    "F": [
    ],
    "G": [
    ],
    "H": [
    ],
    "ro16": [
    ],
    "ro8": [
    ],
    "semi": [
    ],
    "finals": [
    ]
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

            if (action.team === 'home') {
                newState[action.id].home.bet = newVal;
            } else if (action.team === 'guest') {
                newState[action.id].guest.bet = newVal;
            } else {
                return state; // wrong team
            }

            // set saved to false
            // TODO
            newState[action.id].saved = false;

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