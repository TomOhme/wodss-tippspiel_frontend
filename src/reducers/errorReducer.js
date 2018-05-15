export function errorReducer(state = {
    showError: false,
    message: ""
}, action) {
    var newState = Object.assign({}, state);
    switch (action.type) {
        case "SHOWERROR":
            newState.showError = true;
            newState.message = action.message;
            return newState;
        case "DISMISSERROR":
            newState.showError = false;
            newState.message = "";
            return newState;
        default:
            return state;
    }
}