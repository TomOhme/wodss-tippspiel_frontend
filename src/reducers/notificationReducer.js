export function notificationReducer(state = {
    showMessage: false,
    showError: false,
    message: ""
}, action) {
    var newState = Object.assign({}, state);
    switch (action.type) {
        case "SHOWERROR":
            newState.showMessage = false;
            newState.showError = true;
            newState.message = action.message;
            return newState;
        case "SHOWMESSAGE":
            newState.showError = false;
            newState.showMessage = true;
            newState.message = action.message;
            return newState;
        case "DISMISSERROR":
            newState.showError = false;
            newState.message = "";
            return newState;
        case "DISMISSMESSAGE":
            newState.showMessage = false;
            newState.message = "";
            return newState;
        default:
            return state;
    }
}