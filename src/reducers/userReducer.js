import _ from 'underscore';

const initialState = {
    loggedIn: false,
    //loggedIn: true,
    bets: [],
    betGroup: [],
    name: "test",
    email: "",
    roles: [
        ""
    ],
    dailyresults: false,
    reminders: false,
    tempmail: "",
    temppassword: "",
    loginPossible: false,
    activeScreen: "login",
};

const userReducer = (state = initialState, action, store) => {
    var newState = Object.assign({}, state);

    switch (action.type) {
        case "CHANGEMAILONSERVER":
            console.log(action.type);
            // TODO
            return state;
        case "RESETPASSWORDONSERVER":
            console.log(action.type);
            // TODO
            return state;
        case "DELETEPROFILEONSERVER":
            console.log(action.type);
            // TODO
            return state;
        case "ONMAILCHANGE":
            newState.tempmail = action.mail;
            newState.loginPossible = isLoginPossible(newState);
            return newState;
        case "ONPASSWORDCHANGE":
            newState.temppassword = action.password;
            newState.loginPossible = isLoginPossible(newState);
            return newState;

        case "LOGINSUCCESS":
            // update logged in
            newState.loggedIn = true;

            // set user data
            var data = action.userData;
            newState.bets = data.bets;
            newState.betGroup = data.betGroup;
            newState.name = data.name;
            newState.email = data.email;

            // flatten roles to strings of role name
            newState.roles = _.map(data.roles, function (role) {
                return role.name
            });

            return newState;

        case "SWITCHTOREGISTER":
            console.log(action.type);
            newState.activeScreen = "register";
            // TODO
            return state;
        case "REQUESTREGISTER":
            console.log(action.type);
            console.log(action.mail);
            console.log(action.username);
            console.log(action.password);
            // TODO
            return state;
        default:
            return state;
    }
};

function isLoginPossible(newState) {
    if (newState.tempmail.length > 0 && newState.temppassword.length > 0) {
        return true;
    } else {
        return false;
    }
}

export default userReducer;