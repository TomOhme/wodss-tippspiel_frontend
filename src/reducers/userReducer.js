const initialState = {
    name: "hans",
    email: "hans@mail.com",
};

const userReducer = (state = initialState, action) => {
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
        default: 
            return state;
    }
};

export default userReducer;