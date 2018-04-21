const initialState = [
    {
        number: 1,
        name: "Team T",
        averagepoints: 849
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
    switch (action.type) {
        default:
            return state;
    }
};

export default groupScoreBoardReducer;