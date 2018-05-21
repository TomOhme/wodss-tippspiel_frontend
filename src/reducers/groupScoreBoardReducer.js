const initialState = [
    {
        number: 1,
        name: "Team T",
        averagepoints: 68
    },
    {
        number: 2,
        name: "Gruppe Kiosk",
        averagepoints: 456
    },
    {
        number: 3,
        name: "TestGroupPleaseIgnore",
        averagepoints: 123
    }
];

const groupScoreBoardReducer = (state = initialState, action) => {
    var newState = Object.assign({}, state);

    switch (action.type) {
        case "GETGROUPRANKINGSUCCESS":
            console.log(action.groupRanking);
            newState = action.groupRanking;
            // TODO calc average points, use _.reduce()
            return newState;
        default:
            return state;
    }
};

export default groupScoreBoardReducer;