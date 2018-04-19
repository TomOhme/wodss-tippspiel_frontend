const initialState = {
    groupNames: [
        "Team T",
        "Gruppe Kiosk",
        "TestGroupPeaseIgnore"
    ],
    currentGroup: {
        name: "Team T",
        userIsMember: true,
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
        case 'SWITCHGROUP':
            // TODO
            return state;
        case 'JOINGROUP':
            // TODO
            return state;
        case 'LEAVEGROUP':
            // TODO
            return state;
        case 'CREATEGROUP':
            // TODO
            return state;
        default: 
            return state;
    }
};

export default betGroupsReducer;