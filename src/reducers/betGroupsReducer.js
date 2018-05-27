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
            return state;
        case "CREATEGROUPONSERVER":
            return state;
        case "SWITCHGROUPSUCCESS":
            newState.currentGroup = action.group;
            newState.currentGroup.userIsMember = _.contains(action.group.user_ids, action.userId);

            var users = action.group.users;

            users = _.sortBy(users, "score");

            _.each(newState.currentGroup.users, (user) => {
                user.rank = _.indexOf(users, user) + 1;
            });

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