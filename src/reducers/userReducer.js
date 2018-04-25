const initialState = {
    loggedIn: false,
    name: "hans",
    email: "hans@mail.com",
    tempmail: "",
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
            console.log(newState.tempmail);
            return newState;
        case "REQUESTLOGIN":
            console.log(action.type);
            // TODO
            return state;
        default: 
            return state;
    }
};

export default userReducer;