import _ from 'underscore';

const initialState = {
    currentGroup: getDummyGroup(),
    groups: [{
        id: 1,
        rank: 1,
        name: "Testgroup",
        score: 13,
        user_ids: [],
        users: []
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
            newState.currentGroup.userIsMember = _.contains(action.group.user_ids, action.userId);
            return newState;
        case "GETGROUPRANKINGSUCCESS":
            var newGroupRanking = _.sortBy(action.groupRanking, "score");
            _.each(newGroupRanking, (group) => {
                group.rank = _.indexOf(newGroupRanking, group) + 1;
            });
            newState.groups = newGroupRanking;

            if (newState.groups.length === 0) {
                newState.currentGroup = getDummyGroup();
            }

            return newState;
        default:
            return state;
    }
};

export default betGroupsReducer;

function getDummyGroup() {
    return {
        id: 1,
        name: "Testgroup",
        userIsMember: false,
        user_ids: [],
        users: [{
            id: 1,
            rank: 1,
            name: "hase",
            points: 16
        }]
    }
}