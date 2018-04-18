const initialState = [
    {
        number: 1,
        name: "hase",
        points: 888
    },
    {
        number: 2,
        name: "maulwurf",
        points: 555
    },
    {
        number: 3,
        name: "zebra",
        points: 222
    }
];

const playerScoreBoardReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default playerScoreBoardReducer;