const initialState = {
    loggedIn: false,
    name: "hans",
    email: "hans@mail.com",
    tempmail: "",
    temppassword: "",
    loginPossible: false,
    activeScreen: "login"
};

const userReducer = (state = initialState, action) => {
    var newState = Object.assign({}, state);

    switch (action.type) {
        case "CHANGEMAILONSERVER":
            console.log(action.type);
            // TODO
            return state;
        case "CHANGEPASSWORDONSERVER":
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
        case "REQUESTLOGIN":
            console.log(action.type);
            // TODO
            return state;
        case "SWITCHTOREGISTER":
            console.log(action.type);
            newState.activeScreen = "register";
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