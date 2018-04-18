const initialState = {
    groupNames: [
        "Team T",
        "Gruppe Kiosk",
        "TestGroupPeaseIgnore"
    ],
    currentGroup: {
        name: "Team T",
        members: [{
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
            },
        ]
    }
};

const betGroupsReducer = (state = initialState, action) => {
    switch (action.type) {
        default: return state;
    }
};

export default betGroupsReducer;