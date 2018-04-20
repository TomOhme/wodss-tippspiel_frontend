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
    },
};

const betGroupsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SWITCHGROUP":
            console.log("SWITCHGROUP");
            // TODO
            return state;
        case "JOINGROUP":
            console.log("JOINGROUP");
            // TODO
            return state;
        case "LEAVEGROUP":
            console.log("LEAVEGROUP");
            // TODO
            return state;
        case "CREATEGROUPONSERVER":
            console.log("CREATEGROUPONSERVER");
            // TODO
            console.log(action.name);
            return state;
        default: 
            return state;
    }
};

export default betGroupsReducer;