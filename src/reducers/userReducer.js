import _ from 'underscore';

const initialState = {
    id: 0,
    loggedIn: false,
    //loggedIn: true,
    bets: [],
    betGroup: [],
    name: "",
    email: "",
    dailyResults: false,
    reminders: false,
    loginPossible: false,
    activeScreen: "login",
};

const userReducer = (state = initialState, action, store) => {
    var newState = Object.assign({}, state);

    switch (action.type) {
        case "UPDATEPROFILESUCCESS":
            const newProfile = action.newProfile;
            newState.name = newProfile.name;
            newState.email = newProfile.email;
            newState.reminders = newProfile.reminders;
            newState.dailyResults = newProfile.dailyResults;
            return newState;
        case "DELETEPROFILEONSERVERSUCCESS":
            return state;
        case "RESETPASSWORDONSERVERSUCCESS":
            return state;
        case "LOGINSUCCESS":
            // update logged in
            newState.loggedIn = true;

            // set user data
            var data = action.userData;

            newState.id = data.id;
            newState.bets = data.bets;
            newState.betGroup = data.betGroup;
            newState.name = data.name;
            newState.email = data.email;
            newState.reminders = data.reminders;
            newState.dailyResults = data.dailyResults;

            // flatten roles to strings of role name
            newState.roles = _.map(data.roles, function (role) {
                return role.name
            });

            return newState;

        case "SWITCHTOREGISTER":
            newState.activeScreen = "register";
            return state;
        default:
            return state;
    }
};


export default userReducer;