const initialState = [
    {
        id: 1,
        rank: 3,
        name: "Team T",
        score: 68
    },
    {
        id: 2,
        rank: 1,
        name: "Gruppe Kiosk",
        score: 456
    },
    {
        id: 3,
        rank: 2,
        name: "TestGroupPleaseIgnore",
        score: 123
    }
];

const groupScoreBoardReducer = (state = initialState, action) => {
    var newState = Object.assign({}, state);

    switch (action.type) {
        case "GETGROUPRANKINGSUCCESS":
            console.log(action.groupRanking);
            newState = action.groupRanking;
            return newState;
        default:
            return state;
    }
};

export default groupScoreBoardReducer;