import _ from 'underscore';

const initialState = {
    currentGroup: {
        id: 1,
        name: "Testgroup",
        userIsMember: false,
        users: [{
            id: 1,
            rank: 1,
            name: "hase",
            points: 16
        }]
    },
    groups: [{
        id: 1,
        rank: 1,
        name: "Testgroup",
        score: 13
    }]
};

const betGroupsReducer = (state = initialState, action) => {
    var newState = Object.assign({}, state);

    switch (action.type) {
        case "JOINGROUPSUCCESS":
            console.log(action.type);
            // TODO
            return state;
        case "LEAVEGROUP":
            console.log(action.type);
            // TODO
            return state;
        case "CREATEGROUPONSERVER":
            console.log(action.type);
            // TODO
            return state;
        case "SWITCHGROUPSUCCESS":
            // TODO
            console.log(action.group);
            newState.currentGroup = action.group;
            const userIds = _.map(action.group.users, (user) => {
                return user.id;
            });
            newState.currentGroup.userIsMember = _.contains(userIds, state.user.id);
            return newState;
        case "GETGROUPRANKINGSUCCESS":
            //console.log(action.groupRanking["0"]);
            var newGroupRanking = _.sortBy(action.groupRanking, "score");
            _.each(newGroupRanking, (group) => {
                group.rank = _.indexOf(newGroupRanking, group) + 1;
            });
            newState.groups = newGroupRanking;
            newState.currentGroup = newGroupRanking[0];
            //const betGroupsData = action.betGroupsData;
            //newState.groupNames = _.pluck(betGroupsData, "name");
            return newState;
        default:
            return state;
    }
};

export default betGroupsReducer;